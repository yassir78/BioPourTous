import { environment } from "./../../environments/environment";
import { Router } from "@angular/router";
import firebase from "firebase/app";
import "firebase/auth";
import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
firebase.initializeApp(environment.firebaseConfig);
@Injectable({
  providedIn: "root",
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          //  firebase.auth().signOut();
          resolve(true);
        } else {
          this.router.navigate(["/login"]);
          resolve(false);
        }
      });
    });
  }
}
