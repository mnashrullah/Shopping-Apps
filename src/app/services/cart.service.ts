//src/app/services/cart.services.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
const KEY_CART = "cart"
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private storage: Storage) {
    this.getItems();
  }
  addToCart(product) {
    console.log(product);
    this.items.push(product);
    this.storage.set(KEY_CART, JSON.stringify(this.items));
  }
  getItems() {
    this.storage.get(KEY_CART).then((hasil) => {
      if (hasil != null) {
        this.items = JSON.parse(hasil);
        console.log(this.items);
      } else {
        this.items = [];
        console.log('empty');
      }
    });

    return this.items;
  }
  clearCart() {
    this.items = [];
    this.storage.remove(KEY_CART);
    return this.items;
  }
}
