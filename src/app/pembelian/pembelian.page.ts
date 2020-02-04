//src/app/pembelian/pembelian.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.page.html',
  styleUrls: ['./pembelian.page.scss'],
})
export class PembelianPage implements OnInit {
  dataPembeli = {
    nama: '',
    alamat: ''
  };

  constructor(
    private router: Router,
    private utils:UtilsService,
    private cart: CartService) { }

  ngOnInit() {
  }
  async pembayaran() {
    console.log(this.dataPembeli);
    this.cart.clearCart();
    this.utils.showToast('Data telah disimpan');
    this.router.navigate(['/home']);
  }
}
