import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PageService {
  constructor() {}
  getPages() {
    return [
      {
        title: "Accueil",
        url: "/home",
        icon: "home",
      },
      {
        title: "Categories",
        url: "/category",
        icon: "grid",
      },
      {
        title: "Boutique",
        url: "/product/Boutique",
        icon: "basket",
      },
      {
        title: "Panier",
        url: "/cart",
        icon: "cart",
      },
      {
        title: "Mon compte",
        url: "/account",
        icon: "person",
      },
    ];
  }
}
