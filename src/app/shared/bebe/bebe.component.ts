import { ProductService } from "src/app/services/product.service";
import { ModalController } from "@ionic/angular";
import { Product } from "./../../models/product";
import { Component, OnInit } from "@angular/core";
import { ProductDetailsComponent } from "src/app/pages/product-details/product-details.component";

@Component({
  selector: "app-bebe",
  templateUrl: "./bebe.component.html",
  styleUrls: ["./bebe.component.scss"],
})
export class BebeComponent implements OnInit {
  products: Product[];
  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };
  constructor(
    private productService: ProductService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.products = this.productService.productBebeList();
  }
  async seeDetails(item: Product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: item,
    });
    return await modal.present();
  }
}
