import { Observable } from "rxjs";
import firebase from "firebase";
import { User } from "./../models/user";
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase } from "@angular/fire/database";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private fireData = firebase.database().ref("/users");
  constructor(
    private afStore: AngularFirestore,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private ngZone: NgZone
  ) {}
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  register(user: User) {
    return this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(
        () => {
          this.fireData.child(firebase.auth().currentUser.uid).set({
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.fireData.child(firebase.auth().currentUser.uid).set({
          fullName: result.user.displayName,
          email: result.user.email,
          phoneNumber: result.user.phoneNumber,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  signout() {
    this.afAuth.signOut();
  }

  passwordReset(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email);
  }
  getCurrentUser() {
    return this.db.list("users").valueChanges();
  }

  getConnectedUser() {
    return firebase.auth().currentUser;
  }
}
