import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPeliculaPage } from './view-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPeliculaPageRoutingModule {}
