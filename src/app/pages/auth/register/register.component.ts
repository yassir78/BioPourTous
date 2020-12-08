import { Router } from "@angular/router";
import { AuthService } from "./../../../services/auth.service";
import { User } from "./../../../models/user";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  private user: User;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}
  submit(registerForm: FormGroup) {
    this.authService
      .register({
        email: registerForm.value.email,
        fullName: registerForm.value.fullName,
        phoneNumber: registerForm.value.phone,
        password: registerForm.value.password,
      })
      .then(
        (data) => {
          this.router.navigate(["/"]);
        },
        (err) => {
          console.log("%c Error", "color : red ; font-size:1.5em");
        }
      );
  }
  registerUsingGoogle() {
    this.authService.GoogleAuth().then(
      (data) => {
        this.router.navigate(["/"]);
      },
      (err) => {
        console.log("%c Error", "color : red ; font-size:1.5em");
      }
    );
  }
}
