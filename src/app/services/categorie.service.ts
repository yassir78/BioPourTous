import { Category } from "./../models/category";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategorieService {
  categories: Category[];

  constructor() {}

  categoryList() {
    this.categories = [
      {
        id: 1,
        name: "Maison",
        image: "assets/images/category/women-fashion.jpg",
      },
      {
        id: 2,
        name: "Bebe",
        image: "assets/images/category/men-fashion.jpg",
      },
      {
        id: 3,
        name: "Sante",
        image: "assets/images/category/luggage.jpg",
      },
    ];

    return this.categories;
  }
}
