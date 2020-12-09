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
        image: "assets/images/category/maison/image1.jpg",
      },
      {
        id: 2,
        name: "bebe",
        image: "assets/images/category/bebe/image1.jpg",
      },
      {
        id: 3,
        name: "sante",
        image: "assets/images/category/sante/image1.jpg",
      },
      {
        id: 4,
        name: "boisson",
        image: "assets/images/category/boisson/image1.jpg",
      },
      {
        id: 5,
        name: "sale",
        image: "assets/images/category/sante/image1.jpg",
      },
      {
        id: 6,
        name: "noel",
        image: "assets/images/category/noel/image1.jpg",
      },
      {
        id: 7,
        name: "sucre",
        image: "assets/images/category/sucre/image1.jpg",
      },
    ];

    return this.categories;
  }
}
