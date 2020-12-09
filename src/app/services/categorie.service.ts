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
        name: "maison",
        image: "assets/images/category/women-fashion.jpg",
      },
      {
        id: 2,
        name: "bebe",
        image: "assets/images/category/men-fashion.jpg",
      },
      {
        id: 3,
        name: "sante",
        image: "assets/images/category/luggage.jpg",
      },
      {
        id: 4,
        name: "boisson",
        image: "assets/images/category/luggage.jpg",
      },
      {
        id: 5,
        name: "featured",
        image: "assets/images/category/luggage.jpg",
      },
      {
        id: 6,
        name: "noel",
        image: "assets/images/category/luggage.jpg",
      },
      {
        id: 7,
        name: "sucre",
        image: "assets/images/category/luggage.jpg",
      },
    ];

    return this.categories;
  }
}
