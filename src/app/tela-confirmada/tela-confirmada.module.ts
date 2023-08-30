import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaConfirmadaPageRoutingModule } from './tela-confirmada-routing.module';

import { TelaConfirmadaPage } from './tela-confirmada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaConfirmadaPageRoutingModule
  ],
  declarations: [TelaConfirmadaPage]
})
export class TelaConfirmadaPageModule {}
