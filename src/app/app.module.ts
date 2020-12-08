import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
import { environment } from "./../environments/environment";
import { RegisterModule } from "./pages/auth/register/register.module";
import { LoginModule } from "./pages/auth/login/login.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule, FirebaseApp } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
@NgModule({
  declarations: [AppComponent, ProductDetailsComponent],
  entryComponents: [ProductDetailsComponent],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LoginModule,
    RegisterModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestoreModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
