import { Product } from "./../models/product";
import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { BehaviorSubject, Subscriber } from "rxjs";
const { Storage } = Plugins;
let products = Storage.get({ key: "my-cart" });
@Injectable({
  providedIn: "root",
})
export class StorageService {
  private cartItemCount: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() {}

  async setObject(product: Product, ITEMS_KEY, operation: string) {
    await Storage.get({ key: ITEMS_KEY }).then(async (products: any) => {
      this.cartItemCount.next(this.cartItemCount.value + 1);
      if (products.value) {
        let newProducts: any = JSON.parse(products.value);
        let hasItem = newProducts.find((item, index) => {
          if (item.id == product.id) {
            let newQte;
            if (operation == "plus") {
              newQte = newProducts[index].quantity + 1;
            } else {
              if (newProducts[index].quantity > 0) {
                newQte = newProducts[index].quantity - 1;
              }
            }
            newProducts[index].quantity = newQte;
            return true;
          }
        });
        if (!hasItem) {
          newProducts.push(product);
        }
        await Storage.set({
          key: ITEMS_KEY,
          value: JSON.stringify(newProducts),
        });
      } else {
        await Storage.set({
          key: ITEMS_KEY,
          value: JSON.stringify([product]),
        });
      }
    });
  }

  async getObject(ITEMS_KEY): Promise<Product[]> {
    const ret: any = await Storage.get({ key: ITEMS_KEY });
    const products = JSON.parse(ret.value);
    return products;
  }
  async removeStorageValue(id: number, ITEMS_KEY) {
    const ret: any = await Storage.get({ key: ITEMS_KEY });
    const products = JSON.parse(ret.value);

    if (!products || products.length === 0) {
      return null;
    }

    let toKeep: Product[] = [];

    for (let i of products) {
      if (i.id !== id) {
        toKeep.push(i);
      } else {
        for (let index = 0; index < i.quantity; index++) {
          if (this.cartItemCount.value > 0) {
            this.cartItemCount.next(this.cartItemCount.value - 1);
          }
        }
      }
    }

    await Storage.set({
      key: ITEMS_KEY,
      value: JSON.stringify(toKeep),
    });

    return true;
  }
  async clear() {
    this.cartItemCount.next(0);
    await Storage.clear();
  }
  async getCartItemCount() {
    const products = await await this.getObject("my-cart");
    let length = 0;
    if (products) {
      products.forEach((item) => {
        length += item.quantity;
      });
    }
    this.cartItemCount.next(length);
    return this.cartItemCount;
  }
  async getProductsLength() {
    return (await this.getObject("my-cart")).length;
  }
}
