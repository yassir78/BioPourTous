import { BehaviorSubject } from "rxjs";
import { StorageService } from "./../../services/storage.service";
import { Category } from "./../../models/category";
import { CategorieService } from "./../../services/categorie.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-category",
  templateUrl: "./category.page.html",
  styleUrls: ["./category.page.scss"],
})
export class CategoryPage implements OnInit {
  categories: Category[];
  grid: Boolean = true;
  oneColumn: Boolean = false;
  list: Boolean = false;
  cartItemCount: BehaviorSubject<number>;
  constructor(
    private storageService: StorageService,
    private router: Router,
    private categoryService: CategorieService
  ) {
    this.storageService.getCartItemCount().then((result) => {
      this.cartItemCount = result;
    });
  }
  ngOnInit() {
    this.getCategories();
  }

  // Get list of categories
  getCategories() {
    this.categories = this.categoryService.categoryList();
  }

  // One column view function
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

  // Go to cart page function
  async gotoCartPage() {
    this.router.navigate(["/cart"]);
  }
}
