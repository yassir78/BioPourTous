import { BehaviorSubject } from "rxjs";
import { StorageService } from "./../../services/storage.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  cartItemCount: BehaviorSubject<number>;
  constructor(private storageService: StorageService) {
    this.storageService.getCartItemCount().then((result) => {
      this.cartItemCount = result;
    });
  }

  ngOnInit() {}
}
