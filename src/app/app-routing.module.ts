import { GuardGuard } from "./guards/guard.guard";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/auth/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/auth/register/register.module").then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
    canActivate: [GuardGuard],
  },
  {
    path: "cart",
    loadChildren: () =>
      import("./pages/cart/cart.module").then((m) => m.CartPageModule),
    canActivate: [GuardGuard],
  },
  {
    path: "category",
    loadChildren: () =>
      import("./pages/category/category.module").then(
        (m) => m.CategoryPageModule
      ),
    canActivate: [GuardGuard],
  },
  {
    path: "product/:category",
    loadChildren: () =>
      import("./pages/product/product.module").then((m) => m.ProductPageModule),
    canActivate: [GuardGuard],
  },
  {
    path: "check-out",
    loadChildren: () =>
      import("./pages/check-out/check-out.module").then(
        (m) => m.CheckOutPageModule
      ),
    canActivate: [GuardGuard],
  },
  {
    path: "essai-gratuit",
    loadChildren: () =>
      import("./pages/essai-gratuit/essai-gratuit.module").then(
        (m) => m.EssaiGratuitPageModule
      ),
    canActivate: [GuardGuard],
  },
  {
    path: "reset-password",
    loadChildren: () =>
      import("./reset-password/reset-password.module").then(
        (m) => m.ResetPasswordPageModule
      ),
  },
  {
    path: "account",
    loadChildren: () =>
      import("./pages/account/account.module").then((m) => m.AccountPageModule),
    canActivate: [GuardGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
