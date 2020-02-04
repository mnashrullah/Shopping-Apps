// src/app/home/home.page.html
import { Component } from '@angular/core';
import { products } from '../products'
import { CartService } from '../services/cart.service';
import { UtilsService } from '../services/utils.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listProducts = [];
  constructor(
    private cart: CartService,
    private utils: UtilsService) {
    this.listProducts = products;
    console.log(products);
    console.log(this.listProducts);
  }
  beli(data) {
    console.log('Anda melakukan klik pada ' + data.name);
    this.utils.showToast('Anda membeli ' + data.name);
    this.cart.addToCart(data);
  }
}
