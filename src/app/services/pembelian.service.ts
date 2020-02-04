import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
const KEY_PEMBELIAN = "pembelian";

@Injectable({
  providedIn: 'root'
})
export class PembelianService {
  items = [];
  constructor(private storage: Storage) {
    this.getItems();
  }
  add(data) {
    console.log(data);
    this.items.push(data);
    this.storage.set(KEY_PEMBELIAN, JSON.stringify(this.items));
    
  }
  getItems() {
    this.storage.get(KEY_PEMBELIAN).then((hasil) => {
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
  clear() {
    this.items = [];
    this.storage.remove(KEY_PEMBELIAN);
    return this.items;
  }
}
