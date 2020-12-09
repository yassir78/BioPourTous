import { Product } from "./../models/product";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products: Product[];
  constructor() {}
  productSanteList() {
    this.products = [
      {
        id: 1,
        name: "Huile Végétale de Nigelle Bio - 50ml",
        description: `L'huile végétale de nigelle est l'huile parfaite pour confectionner des soins pour les peaux à tendance acnéique, grâce à ses propriétés purifiantes.`,
        price: 6.7,
        discountPrice: 30,
        images: ["assets/images/products/sante/image1.jpg"],
        category: "sante",
        quantity: 1,
      },
      {
        id: 2,
        name: "Huile de Nigelle Bio - 50ml",
        description:
          "L'huile végétale de nigelle est l'huile parfaite pour confectionner des soins pour les peaux à tendance acnéique, grâce à ses propriétés purifiantes.",
        price: 6.9,
        discountPrice: 50,
        images: ["assets/images/products/sante/image2.jpg"],
        category: "sante",
        quantity: 1,
      },
      {
        id: 3,
        name: "Huile Bio - 50ml",
        description: `L'huile végétale de nigelle est l'huile parfaite pour confectionner des soins pour les peaux à tendance acnéique, grâce à ses propriétés purifiantes.`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/sante/image3.jpg"],
        category: "Sante",
        quantity: 1,
      },
    ];

    return this.products;
  }
  productMaisonList() {
    this.products = [
      {
        id: 5,
        name: "Produit de maison - lavage",
        description: `Cette délicieuse tablette de chocolat noir équitable est élaborée dans la plus pure tradition, certifiée bio et équitable, garantissant ainsi des conditions de travail décentes et une juste rémunération des acteurs de la filière, en plus de limiter la déforestation due à la culture du cacao.<br><br> ✔Vegan
`,
        price: 4.99,
        discountPrice: 30,
        images: ["assets/images/products/maison/image1.jpg"],
        category: "Maison",
        quantity: 1,
      },
      {
        id: 6,
        name: "Produit de maison - lavage",
        description: `Cette délicieuse tablette de chocolat noir équitable est élaborée dans la plus pure tradition, certifiée bio et équitable, garantissant ainsi des conditions de travail décentes et une juste rémunération des acteurs de la filière, en plus de limiter la déforestation due à la culture du cacao.<br><br> ✔Vegan
`,
        price: 4.99,
        discountPrice: 50,
        images: ["assets/images/products/maison/image2.jpg"],
        category: "Maison",
        quantity: 1,
      },
      {
        id: 7,
        name: "Produit de maison - lavage",
        description: `Cette délicieuse tablette de chocolat noir équitable est élaborée dans la plus pure tradition, certifiée bio et équitable, garantissant ainsi des conditions de travail décentes et une juste rémunération des acteurs de la filière, en plus de limiter la déforestation due à la culture du cacao.<br><br> ✔Vegan

`,
        price: 4.99,
        discountPrice: 45,
        images: ["assets/images/products/maison/image3.jpg"],
        category: "Maison",
        quantity: 1,
      },
    ];

    return this.products;
  }

  productBebeList() {
    this.products = [
      {
        id: 9,
        name: "Couches Ecologiques",
        description: `Les couches écologiques Tidoo sont hypoallergéniques et anti-fuites, elles préserveront bébé jusqu'à 12h ! Fabriqué en France. Pack de 50 couches écologiques.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/bebe/image1.jpg"],
        category: "Bebe",
        quantity: 1,
      },
      {
        id: 10,
        name: "Maxi Carrés Coton",
        description:
          "Après le succès de la gamme de couches écologiques Night&Day, Tidoo lance Care, sa gamme de soins écologiques fabriquée en France",
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/bebe/image2.jpg"],
        category: "Bebe",
        quantity: 1,
      },
      {
        id: 11,
        name: "Culottes d'apprentissage ",
        description: `Les culottes d'apprentissage Night & Day allient efficacité et engagement écologique, pour le plus grand confort de bébé et la tranquillité des parents.`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/bebe/image3.jpg"],
        category: "Bebe",
        quantity: 1,
      },
    ];

    return this.products;
  }
  productFeaturedList() {
    this.products = [
      {
        id: 13,
        name: "Womens Long Sweater",
        description: `100% Polyester. Soft lightweight and stretchy material feels wonderful against your skin. <br/><br/> Our cardigan vests feature lapel collar, open front, solid color, two side pockets, draped, loose fitting, thigh length, warm sweater vets, long vests, sleeveless cardigans with unique trim, pretty nice for a fun layered look.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/bebe/image1.jpg"],
        category: "Bebe",
        quantity: 1,
      },
      {
        id: 14,
        name: "COOKIE BRUN - 200g",
        description: `Cette délicieuse tablette de chocolat noir équitable est élaborée dans la plus pure tradition, certifiée bio et équitable, garantissant ainsi des conditions de travail décentes et une juste rémunération des acteurs de la filière, en plus de limiter la déforestation due à la culture du cacao.`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/sucre/image1.jpg"],
        category: "Sucre",
        quantity: 1,
      },
      {
        id: 15,
        name: "Huile Végétale de Nigelle Bio - 50ml",
        description: `L'huile végétale de nigelle est l'huile parfaite pour confectionner des soins pour les peaux à tendance acnéique, grâce à ses propriétés purifiantes.`,
        price: 9.5,
        discountPrice: 45,
        images: ["assets/images/products/sante/image1.jpg"],
        category: "Sante",
        quantity: 1,
      },

      {
        id: 30,
        name: "Huile d'Olive Vierge Extra Origine Italie Bio - 1L",
        description: `Cette huile d'olive biologique vierge extra est extraite d'une première pression à froid d'olives sans produits chimiques ou chaleur. Elle est 100% bio et d'origine italienne avec une traçabilité complète. Les olives sont pressées moins de 24h après leur récolte pour conserver toute leur fraîcheur. Elle est issue de la variété Carolea, réputée pour son goût délicat et fruité.
        Retrouvez toutes nos huiles d'olive bio`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/sale/image1.jpg"],
        category: "Sale",
        quantity: 1,
      },

      {
        id: 31,
        name: "Festin du Père Noël 🎅",
        description: `Il semblerait que vous ayez été sage cette année car le Père Noël vous a concocté un vrai festin avec des produits tout en gourmandise : un gâteau italien moelleux à souhait, des escargots pralinés au chocolat noir fondant, une bière et un thé aux arômes hivernaux et une huile d'olive à la truffe pour donner un goût de fêtes à tous vos plats !`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/noel/image1.jpg"],
        category: "Noel",
        quantity: 1,
      },

      {
        id: 32,
        name: "Boisson Riz Nature Origine Italie Bio - 1L",
        description: "Boisson de riz nature origine Italie",
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/boisson/image1.jpg"],
        category: "Boisson",
        quantity: 1,
      },

      {
        id: 15,
        name: "Produit de maison - lavage",
        description: `Cette délicieuse tablette de chocolat noir équitable est élaborée dans la plus pure tradition, certifiée bio et équitable, garantissant ainsi des conditions de travail décentes et une juste rémunération des acteurs de la filière, en plus de limiter la déforestation due à la culture du cacao.<br><br> ✔Vegan
`,

        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/maison/image1.jpg"],
        category: "Maison",
        quantity: 1,
      },
    ];
    return this.products;
  }

  productBoissonList() {
    this.products = [
      {
        id: 16,
        name: "Boisson Origine Italie Bio - 1L",
        description: `Boisson de riz nature origine Italie`,

        price: 1.99,
        discountPrice: 30,
        images: ["assets/images/products/boisson/image1.jpg"],
        category: "Boisson",
        quantity: 1,
      },
      {
        id: 18,
        name: "Boisson Riz Nature Origine Italie Bio - 1L",
        description: "Boisson de riz nature origine Italie",
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/boisson/image2.jpg"],
        category: "Boisson",
        quantity: 1,
      },
      {
        id: 19,
        name: "Boisson Riz Nature Origine Italie Bio - 1L",
        description: `Boisson de riz nature origine Italie`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/boisson/image3.jpg"],
        category: "Boisson",
        quantity: 1,
      },
    ];

    return this.products;
  }

  productSucreList() {
    this.products = [
      {
        id: 20,
        name: "COOKIE 100% Bio - 200g",
        description: `Cette délicieuse tablette de chocolat noir équitable est élaborée dans la plus pure tradition, certifiée bio et équitable, garantissant ainsi des conditions de travail décentes et une juste rémunération des acteurs de la filière, en plus de limiter la déforestation due à la culture du cacao.`,
        price: 4.99,
        discountPrice: 30,
        images: ["assets/images/products/sucre/image1.jpg"],
        category: "Sucre",
        quantity: 1,
      },
      {
        id: 21,
        name: "COOKIE BRUN- 200g",
        description:
          "Cette délicieuse tablette de chocolat noir équitable est élaborée dans la plus pure tradition, certifiée bio et équitable, garantissant ainsi des conditions de travail décentes et une juste rémunération des acteurs de la filière, en plus de limiter la déforestation due à la culture du cacao.",
        price: 4.9,
        discountPrice: 50,
        images: ["assets/images/products/sucre/image2.jpg"],
        category: "Sucre",
        quantity: 1,
      },
      {
        id: 22,
        name: "COOKIE BLANC- 200g",
        description: `Cette délicieuse tablette de chocolat noir équitable est élaborée dans la plus pure tradition, certifiée bio et équitable, garantissant ainsi des conditions de travail décentes et une juste rémunération des acteurs de la filière, en plus de limiter la déforestation due à la culture du cacao.<br><br>✔Vegan
`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/sucre/image3.jpg"],
        category: "Sucre",
        quantity: 1,
      },

      {
        id: 29,
        name: "COOKIE BRUN- 200g",
        description: `Cette délicieuse tablette de chocolat noir équitable est élaborée dans la plus pure tradition, certifiée bio et équitable, garantissant ainsi des conditions de travail décentes et une juste rémunération des acteurs de la filière, en plus de limiter la déforestation due à la culture du cacao.<br><br>✔Vegan
`,
        price: 6.5,
        discountPrice: 45,
        images: ["assets/images/products/sucre/image4.jpg"],
        category: "Sucre",
        quantity: 1,
      },
    ];

    return this.products;
  }

  productSaleList() {
    this.products = [
      {
        id: 23,
        name: "Huile d'Olive Vierge Extra Origine Italie Bio - 1L - 1000 g",
        description: `Cette huile d'olive biologique vierge extra est extraite d'une première pression à froid d'olives sans produits chimiques ou chaleur. <br><br> Elle est 100% bio et d'origine italienne avec une traçabilité complète. Les olives sont pressées moins de 24h après leur récolte pour conserver toute leur fraîcheur. Elle est issue de la variété Carolea, réputée pour son goût délicat et fruité.<br><br>
   Retrouvez toutes nos huiles bio<br>
   ✔Elaborée par VOUS<br>
   ✔ 100% Italie<br>
   ✔ Direct Producteur`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/sale/image1.jpg"],
        category: "Sale",
        quantity: 1,
      },
      {
        id: 24,
        name: "Tofu Fumé Bio - 200g",
        description: `Ce tofu au délicieux goût fumé sera parfait grillé ou mariné. Faites le plein de protéines végétales ! <br> <br>✔Vegan`,
        price: 3.6,
        discountPrice: 50,
        images: ["assets/images/products/sale/image2.jpg"],
        category: "sale",
        quantity: 1,
      },
      {
        id: 25,
        name: "Truff 100% Bio - 200g",
        description: `Ce tofu au délicieux goût fumé sera parfait grillé ou mariné. Faites le plein de protéines végétales ! <br> <br>✔Vegan`,
        price: 4.4,
        discountPrice: 45,
        images: ["assets/images/products/sale/image3.jpg"],
        category: "Sale",
        quantity: 1,
      },
    ];

    return this.products;
  }

  productNoelList() {
    this.products = [
      {
        id: 26,
        name: "Festin du Père Noël 🎅",
        description: `Il semblerait que vous ayez été sage cette année car le Père Noël vous a concocté un vrai festin avec des produits tout en gourmandise : un gâteau italien moelleux à souhait, des escargots pralinés au chocolat noir fondant, une bière et un thé aux arômes hivernaux et une huile d'olive à la truffe pour donner un goût de fêtes à tous vos plats !`,
        price: 63.99,
        discountPrice: 30,
        images: ["assets/images/products/noel/image1.jpg"],
        category: "Noel",
        quantity: 1,
      },
      {
        id: 27,
        name: "Festin du Père Noël 🎅",
        description: `Il semblerait que vous ayez été sage cette année car le Père Noël vous a concocté un vrai festin avec des produits tout en gourmandise : un gâteau italien moelleux à souhait, des escargots pralinés au chocolat noir fondant, une bière et un thé aux arômes hivernaux et une huile d'olive à la truffe pour donner un goût de fêtes à tous vos plats !`,
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/noel/image2.jpg"],
        category: "Noel",
        quantity: 1,
      },
      {
        id: 28,
        name: "Festin du Père Noël 🎅",
        description: `Il semblerait que vous ayez été sage cette année car le Père Noël vous a concocté un vrai festin avec des produits tout en gourmandise : un gâteau italien moelleux à souhait, des escargots pralinés au chocolat noir fondant, une bière et un thé aux arômes hivernaux et une huile d'olive à la truffe pour donner un goût de fêtes à tous vos plats !`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/noel/image3.jpg"],
        category: "Noel",
        quantity: 1,
      },
    ];

    return this.products;
  }
  productAll() {
    this.products = this.productBebeList()
      .concat(this.productMaisonList())
      .concat(this.productSanteList())
      .concat(this.productBoissonList())
      .concat(this.productNoelList())
      .concat(this.productSaleList())
      .concat(this.productSucreList());
    return this.products;
  }
  findByCategory(category: string) {
    if (category === "sante") {
      return this.productSanteList();
    } else if (category === "bebe") {
      return this.productBebeList();
    } else if (category === "maison") {
      return this.productMaisonList();
    } else if (category === "boisson") {
      return this.productBoissonList();
    } else if (category === "featured") {
      return this.productFeaturedList();
    } else if (category === "sale") {
      return this.productSaleList();
    } else if (category === "noel") {
      return this.productNoelList();
    } else if (category === "sucre") {
      return this.productSucreList();
    } else {
      this.products = this.productAll();
      return this.products;
    }
  }
}
