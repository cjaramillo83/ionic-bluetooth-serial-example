import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

/**
 * Generated class for the CrearProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-producto',
  templateUrl: 'crear-producto.html',
})
export class CrearProductoPage {
  @ViewChild('focusInput') myInput ;

  peso: any[] = [];
  pesito : number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private bluetoothSerial: BluetoothSerial) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearProductoPage');
    this.bluetoothSerial.subscribeRawData().subscribe((dt) =>{
      this.bluetoothSerial.readUntil('(').then((dd) => {
        
        this.onDataReceive(dd);
      })
    });
  }

  
  onDataReceive(data) {
    if(data != ""){
      let sub_mensaje = data.split("+");
      let peso = parseFloat(sub_mensaje[3]);
      if(!Number.isNaN(peso)){  
        this.peso.push(peso);
        this.pesito = peso;
        this.myInput.setFocus();
        this.myInput.setBlur();
        console.log(peso);  
      }
    }
    //console.log(JSON.stringify(dd));
  }

}
