import { BehaviorSubject } from "rxjs";
import { StorageService } from "./../../services/storage.service";
import { Category } from "./../../models/category";
import { ModalController, NavParams } from "@ionic/angular";
import { ProductDetailsComponent } from "./../product-details/product-details.component";
import { Product } from "./../../models/product";
import { ProductService } from "src/app/services/product.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"],
})
export class ProductPage implements OnInit {
  category: string;
  grid: Boolean = true;
  oneColumn: Boolean = false;
  list: Boolean = false;
  title: String;
  products: Product[];
  cartItemCount: BehaviorSubject<number>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private modalController: ModalController,
    private storageService: StorageService
  ) {
    this.storageService.getCartItemCount().then((result) => {
      this.cartItemCount = result;
    });
  }

  ngOnInit() {
    //this.category = this.activatedRoute.snapshot.params.Category;
    this.activatedRoute.paramMap.subscribe((params) => {
      this.category = params.get("category");
      this.title = this.category;
    });
    this.products = this.productService.findByCategory(this.category);
  }
  async goToProductDetails(product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: product,
    });
    return await modal.present();
  }
  showOneColumn() {
    this.oneColumn = true;
    this.grid = false;
    this.list = false;
  }

  // Grid view function
  showGrid() {
    this.grid = true;
    this.oneColumn = false;
    this.list = false;
  }

  // List view function
  showList() {
    this.list = true;
    this.grid = false;
    this.oneColumn = false;
  }
}
