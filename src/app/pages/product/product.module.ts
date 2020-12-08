import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRouteSnapshot } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { ProductPage } from "./product.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProductPage,
      },
    ]),
  ],
  declarations: [ProductPage],
})
export class ProductPageModule {}
