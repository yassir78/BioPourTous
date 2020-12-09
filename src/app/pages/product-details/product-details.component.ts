import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { StorageService } from "./../../services/storage.service";
import { Product } from "./../../models/product";
import { ModalController } from "@ionic/angular";
import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  @Input() id: number;
  @Input() name: String;
  @Input() description: String;
  @Input() price: number;
  @Input() discountPrice: number;
  @Input() images: Array<String>;
  @Input() quantite: number;
  @Input() category: String;
  cartItemCount: BehaviorSubject<number>;
  product: Product;
  slideOpts = {
    initialSlide: 0,
    loop: true,
    autoplay: true,
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  };
  constructor(
    private modalController: ModalController,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.storageService.getCartItemCount().then((result) => {
      this.cartItemCount = result;
    });
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  async goToCart() {
    this.dismiss();
    this.router.navigate(["/cart"]);
  }
  addToCart() {
    this.product = {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      discountPrice: this.discountPrice,
      images: this.images,
      category: this.category,
      quantity: 1,
    };

    // Save cart product in storage
    this.storageService.setObject(this.product, "my-cart", "plus");
  }
}
