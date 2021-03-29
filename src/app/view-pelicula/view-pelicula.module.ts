import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewPeliculaPage } from './view-pelicula.page';

import { IonicModule } from '@ionic/angular';

import { ViewPeliculaPageRoutingModule } from './view-pelicula-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPeliculaPageRoutingModule
  ],
  declarations: [ViewPeliculaPage]
})
export class ViewPeliculaPageModule {}
