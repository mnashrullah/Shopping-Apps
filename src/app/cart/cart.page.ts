//src/app/cart/cart.page.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  title = "Keranjang";
  items = [];

  constructor(private cart: CartService, private router:Router) { }

  ngOnInit() {
    this.ambildata();
    console.log(this.items);
  }
  ambildata() {
    this.items = this.cart.getItems();
  }
  beli() {
    console.log('lanjut pembelian');
    this.router.navigate(['/pembelian']);
  }
  kosongkan() {
    this.cart.clearCart();
    this.ambildata();
  }
}
