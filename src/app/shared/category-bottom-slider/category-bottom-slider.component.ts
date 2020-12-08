import { CategorieService } from "./../../services/categorie.service";
import { Category } from "./../../models/category";
import { ProductDetailsComponent } from "./../../pages/product-details/product-details.component";
import { Product } from "./../../models/product";
import { ModalController } from "@ionic/angular";
import { ProductService } from "./../../services/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-category-bottom-slider",
  templateUrl: "./category-bottom-slider.component.html",
  styleUrls: ["./category-bottom-slider.component.scss"],
})
export class CategoryBottomSliderComponent implements OnInit {
  categories: Category[];
  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };
  constructor(
    private categoryService: CategorieService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.categories = this.categoryService.categoryList();
  }
}
