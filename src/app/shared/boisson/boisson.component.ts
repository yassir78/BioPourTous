import { ProductDetailsComponent } from "./../../pages/product-details/product-details.component";
import { ModalController } from "@ionic/angular";
import { ProductService } from "./../../services/product.service";
import { Product } from "./../../models/product";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.scss'],
})
export class BoissonComponent implements OnInit {
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
     this.products = this.productService.productBoissonList();
  }
  async seeDetails(item: Product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: item,
    });
    return await modal.present();
  }

}
