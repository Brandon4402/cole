import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.showDeviceReady();
  }

  showDeviceReady() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
    console.log(device.cordova);
    console.log(device.model);
    console.log(device.platform);
    console.log(device.uuid);
    console.log(device.version);
    console.log(device.manufacturer);
    console.log(device.isVirtual);
    console.log(device.serial);

    }
  }
}
