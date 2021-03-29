import { Component, OnInit, Input } from '@angular/core';
import { Pelicula,Item } from '../services/data.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class peliculaComponent implements OnInit {
  @Input() item: Item;

  constructor() { }

  ngOnInit() {}
  //paso el link del poster
  getlink(){
    return "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+this.item.poster_path;
  }
  //para comprobar si el icono se tiene que poner en modo ios o no
  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
