import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearProductoPage } from './crear-producto';

@NgModule({
  declarations: [
    CrearProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearProductoPage),
  ],
})
export class CrearProductoPageModule {}
