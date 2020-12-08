import { ProductDetailsComponent } from "./../../pages/product-details/product-details.component";
import { ModalController } from "@ionic/angular";
import { Product } from "./../../models/product";
import { ProductService } from "./../../services/product.service";
import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  input: string = "";
  array: Product[] = [];
  copyProducts: Product[] = [];
  constructor(
    private productSerivce: ProductService,
    private modalController: ModalController
  ) {
    this.productSerivce.productAll().forEach((element) => {
      this.copyProducts.push(element);
    });
  }

  ngOnInit() {}
  filterItems() {
    if (this.input === "") {
      this.array = [];
    } else {
      this.array = this.copyProducts.filter((item) => {
        return item.name.toLowerCase().indexOf(this.input.toLowerCase()) > -1;
      });
    }
  }
  async seeDetails(item: Product) {
    this.input = "";
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: item,
    });
    return await modal.present();
  }
}
