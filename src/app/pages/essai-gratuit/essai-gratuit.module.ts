import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EssaiGratuitPage } from "./essai-gratuit.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: EssaiGratuitPage,
      },
    ]),
  ],
  declarations: [EssaiGratuitPage],
})
export class EssaiGratuitPageModule {}
