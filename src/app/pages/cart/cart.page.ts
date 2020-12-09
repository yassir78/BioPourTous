import { Product } from "./../../models/product";
import { StorageService } from "./../../services/storage.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  cartProducts: Product[] = [];
  total: number = 0;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private storageSerivce: StorageService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getCartItems();
  }

  // Get Cart Items From Storage
  getCartItems() {
    this.storageSerivce.getObject("my-cart").then((products) => {
      this.cartProducts = products;
      for (let i = 0; i < this.cartProducts.length; i++) {
        this.total +=
          this.cartProducts[i].discountPrice * this.cartProducts[i].quantity;
      }
    });
  }

  // Minus Product Quantity
  minusQuantity(product, index) {
    if (product.quantity > 1) {
      product.quantity = product.quantity - 1;
      this.total = this.total - product.discountPrice;
    }
    this.storageSerivce.setObject(product, "my-cart", "mince");
  }

  // Add More Quantity
  addQuantity(product, index) {
    if (product.quantity) {
      product.quantity = product.quantity + 1;
    } else {
      product.quantity = 1;
      product.quantity = product.quantity + 1;
    }
    this.total = this.total + product.discountPrice;
    this.storageSerivce.setObject(product, "my-cart", "plus");
  }

  // Remove Product From Cart
  async removeProduct(product, index) {
    this.cartProducts.splice(index, 1);
    await this.storageSerivce.removeStorageValue(product.id, "my-cart");
    await this.getCartItems();
    this.total = this.total - product.discountPrice * product.quantity;
  }

  // Go to checkout page

  // Back to previous page options
  dismiss() {
    this.router.navigate(["/home"]);
  }
}
