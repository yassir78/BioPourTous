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
        name: "Womens Long Sweater",
        description: `100% Polyester. Soft lightweight and stretchy material feels wonderful against your skin. <br/><br/> Our cardigan vests feature lapel collar, open front, solid color, two side pockets, draped, loose fitting, thigh length, warm sweater vets, long vests, sleeveless cardigans with unique trim, pretty nice for a fun layered look.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/sante/image1.jpg"],
        category: "sante",
        quantity: 1,
      },
      {
        id: 2,
        name: "Men's Sleeve T-Shirt",
        description:
          "60% Cotton/40% Polyester, Imported, Adjustable closure, Machine Wash, Original fit",
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/sante/image2.jpg"],
        category: "sante",
        quantity: 1,
      },
      {
        id: 3,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
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
        name: "Womens Long Sweater",
        description: `100% Polyester. Soft lightweight and stretchy material feels wonderful against your skin. <br/><br/> Our cardigan vests feature lapel collar, open front, solid color, two side pockets, draped, loose fitting, thigh length, warm sweater vets, long vests, sleeveless cardigans with unique trim, pretty nice for a fun layered look.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/maison/image1.jpg"],
        category: "Maison",
        quantity: 1,
      },
      {
        id: 6,
        name: "Men's Sleeve T-Shirt",
        description:
          "60% Cotton/40% Polyester, Imported, Adjustable closure, Machine Wash, Original fit",
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/maison/image2.jpg"],
        category: "Maison",
        quantity: 1,
      },
      {
        id: 7,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.5,
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
        name: "Womens Long Sweater",
        description: `100% Polyester. Soft lightweight and stretchy material feels wonderful against your skin. <br/><br/> Our cardigan vests feature lapel collar, open front, solid color, two side pockets, draped, loose fitting, thigh length, warm sweater vets, long vests, sleeveless cardigans with unique trim, pretty nice for a fun layered look.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/bebe/image1.jpg"],
        category: "Bebe",
        quantity: 1,
      },
      {
        id: 10,
        name: "Men's Sleeve T-Shirt",
        description:
          "60% Cotton/40% Polyester, Imported, Adjustable closure, Machine Wash, Original fit",
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/bebe/image2.jpg"],
        category: "Bebe",
        quantity: 1,
      },
      {
        id: 11,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
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
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/sucre/image1.jpg"],
        category: "Sucre",
        quantity: 1,
      },
      {
        id: 15,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/sante/image1.jpg"],
        category: "Sante",
        quantity: 1,
      },

      {
        id: 30,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/sale/image1.jpg"],
        category: "Sante",
        quantity: 1,
      },

      {
        id: 31,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/noel/image1.jpg"],
        category: "Noel",
        quantity: 1,
      },

      {
        id: 32,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/boisson/image1.jpg"],
        category: "Boisson",
        quantity: 1,
      },

      {
        id: 15,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
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
        name: "Womens Long Sweater",
        description: `100% Polyester. Soft lightweight and stretchy material feels wonderful against your skin. <br/><br/> Our cardigan vests feature lapel collar, open front, solid color, two side pockets, draped, loose fitting, thigh length, warm sweater vets, long vests, sleeveless cardigans with unique trim, pretty nice for a fun layered look.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/boisson/image1.jpg"],
        category: "Boisson",
        quantity: 1,
      },
      {
        id: 18,
        name: "Men's Sleeve T-Shirt",
        description:
          "60% Cotton/40% Polyester, Imported, Adjustable closure, Machine Wash, Original fit",
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/boisson/image2.jpg"],
        category: "Boisson",
        quantity: 1,
      },
      {
        id: 19,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
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
        name: "Womens Long Sweater",
        description: `100% Polyester. Soft lightweight and stretchy material feels wonderful against your skin. <br/><br/> Our cardigan vests feature lapel collar, open front, solid color, two side pockets, draped, loose fitting, thigh length, warm sweater vets, long vests, sleeveless cardigans with unique trim, pretty nice for a fun layered look.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/sucre/image1.jpg"],
        category: "Sucre",
        quantity: 1,
      },
      {
        id: 21,
        name: "Men's Sleeve T-Shirt",
        description:
          "60% Cotton/40% Polyester, Imported, Adjustable closure, Machine Wash, Original fit",
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/sucre/image2.jpg"],
        category: "Sucre",
        quantity: 1,
      },
      {
        id: 22,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.5,
        discountPrice: 45,
        images: ["assets/images/products/sucre/image3.jpg"],
        category: "Sucre",
        quantity: 1,
      },

      {
        id: 29,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.5,
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
        name: "Womens Long Sweater",
        description: `100% Polyester. Soft lightweight and stretchy material feels wonderful against your skin. <br/><br/> Our cardigan vests feature lapel collar, open front, solid color, two side pockets, draped, loose fitting, thigh length, warm sweater vets, long vests, sleeveless cardigans with unique trim, pretty nice for a fun layered look.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/sale/image1.jpg"],
        category: "Sale",
        quantity: 1,
      },
      {
        id: 24,
        name: "Men's Sleeve T-Shirt",
        description:
          "60% Cotton/40% Polyester, Imported, Adjustable closure, Machine Wash, Original fit",
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/sale/image2.jpg"],
        category: "sale",
        quantity: 1,
      },
      {
        id: 25,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.5,
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
        name: "Womens Long Sweater",
        description: `100% Polyester. Soft lightweight and stretchy material feels wonderful against your skin. <br/><br/> Our cardigan vests feature lapel collar, open front, solid color, two side pockets, draped, loose fitting, thigh length, warm sweater vets, long vests, sleeveless cardigans with unique trim, pretty nice for a fun layered look.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/noel/image1.jpg"],
        category: "Noel",
        quantity: 1,
      },
      {
        id: 27,
        name: "Men's Sleeve T-Shirt",
        description:
          "60% Cotton/40% Polyester, Imported, Adjustable closure, Machine Wash, Original fit",
        price: 65.9,
        discountPrice: 50,
        images: ["assets/images/products/noel/image2.jpg"],
        category: "Noel",
        quantity: 1,
      },
      {
        id: 28,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
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
      .concat(this.productSanteList());
    return this.products;
  }
  findByCategory(category: string) {
    if (category === "sante") {
      return this.productSanteList();
    } else if (category === "bebe") {
      return this.productBebeList();
    } else if (category === "maison") {
      return this.productMaisonList();
    } else {
      this.products = this.productBebeList()
        .concat(this.productMaisonList())
        .concat(this.productSanteList());
      return this.products;
    }
  }
}
