import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaConfirmadaPage } from './tela-confirmada.page';

const routes: Routes = [
  {
    path: '',
    component: TelaConfirmadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaConfirmadaPageRoutingModule {}
