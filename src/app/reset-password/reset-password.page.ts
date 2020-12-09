import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { AuthService } from "./../services/auth.service";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.page.html",
  styleUrls: ["./reset-password.page.scss"],
})
export class ResetPasswordPage implements OnInit {
  constructor(
    private authService: AuthService,
    private alterController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}
  submit(registerForm: FormGroup) {
    this.authService
      .passwordReset(registerForm.value.email)
      .then((result) => {
        this.alterController
          .create({
            header: "Vérifier votre boite mail",
            message: " un message de réinitialisation vous a été envoyé",
            buttons: [
              {
                text: "okay",
                handler: () => {
                  registerForm.reset();
                  this.router.navigate(["login"]);
                },
              },
            ],
          })
          .then((alterEl) => {
            alterEl.present();
          });
      })
      .catch((error) => {
        this.alterController
          .create({
            header: "Oups !!",
            message: error.message,
            buttons: [
              {
                text: "okay",
                handler: () => {
                  registerForm.reset();
                },
              },
            ],
          })
          .then((alterEl) => {
            alterEl.present();
          });
      });
  }
}
