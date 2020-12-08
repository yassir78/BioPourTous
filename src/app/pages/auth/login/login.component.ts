import { Router } from "@angular/router";
import { AuthService } from "./../../../services/auth.service";
import { User } from "./../../../models/user";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AlertController, LoadingController } from "@ionic/angular";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}
  async submit(loginForm: FormGroup) {
    let loader = await this.loadingCtrl.create({
      message: "Loading page ...",
    });
    loader.present();
    this.authService
      .login(loginForm.value.email, loginForm.value.password)
      .then((data) => {
        loader.dismiss();
        // redirect
        console.log("%c successd", "color : green ; font-size:1.5em");
        this.router.navigate(["/home"]);
      })
      .catch((error) => {
        loader.dismiss();
        this.alertCtrl
          .create({
            header: "Oups !!",
            message: error.message,
            buttons: [
              {
                text: "okay",
              },
            ],
          })
          .then((alterEl) => {
            alterEl.present();
          });
      });
    loginForm.reset();
  }
}
