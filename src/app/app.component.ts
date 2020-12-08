import { AuthService } from "./services/auth.service";
import { PageService } from "./services/page.service";
import { Component } from "@angular/core";

import { MenuController, Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  public appPages = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private pageService: PageService,
    private authService: AuthService,
    private menuController: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.appPages = this.pageService.getPages();
    });
  }
  signout() {
    this.authService.signout();
    this.menuController.enable(false);
  }
}
