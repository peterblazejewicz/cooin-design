import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CryptosPage } from './cryptos';

@NgModule({
  declarations: [
    CryptosPage,
  ],
  imports: [
    IonicPageModule.forChild(CryptosPage),
  ],
})
export class CryptosPageModule {}
