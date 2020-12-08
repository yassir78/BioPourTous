import { RatingComponent } from "./../../shared/rating/rating.component";
import { CategoryBottomSliderComponent } from "./../../shared/category-bottom-slider/category-bottom-slider.component";
import { HowItWorksComponent } from "./../../shared/how-it-works/how-it-works.component";
import { BioForAllComponent } from "./../../shared/bio-for-all/bio-for-all.component";
import { SucreComponent } from "./../../shared/sucre/sucre.component";
import { NoelComponent } from "./../../shared/noel/noel.component";
import { HygieneComponent } from "./../../shared/hygiene/hygiene.component";
import { FeaturedComponent } from "./../../shared/featured/featured.component";
import { BebeComponent } from "./../../shared/bebe/bebe.component";
import { MaisonComponent } from "./../../shared/maison/maison.component";
import { SanteComponent } from "./../../shared/sante/sante.component";
import { BoissonComponent } from "./../../shared/boisson/boisson.component";
import { HomeTopSliderComponent } from "./../../shared/home-top-slider/home-top-slider.component";
import { RouterModule } from "@angular/router";
import { SearchComponent } from "./../../shared/search/search.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";
import { StarRatingModule } from "ionic5-star-rating";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
      },
    ]),
  ],

  declarations: [
    HomePage,
    SearchComponent,
    HomeTopSliderComponent,
    SanteComponent,
    MaisonComponent,
    BebeComponent,
    FeaturedComponent,
    HygieneComponent,
    NoelComponent,
    SucreComponent,
    HowItWorksComponent,
    BioForAllComponent,
    CategoryBottomSliderComponent,
    RatingComponent,
    BoissonComponent
  ],
})
export class HomePageModule {}
