//src/app/service/utils.service.ts
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private toastCtrl: ToastController) { }

  async showToast(data) {
    let toast = await this.toastCtrl.create({
      message: data,
      duration: 2000
    })
    toast.present();
  }
}
