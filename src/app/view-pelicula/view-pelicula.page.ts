import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Item,genre_ids } from '../services/data.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-pelicula',
  templateUrl: './view-pelicula.page.html',
  styleUrls: ['./view-pelicula.page.scss'],
})
export class ViewPeliculaPage implements OnInit {
  public item: Item;
  public genre:genre_ids;

  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) { 
}

  ngOnInit() {
    //obtengo la id de la ruta del navegador
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    //invoco la funcion para que rellene el item por la id
    this.getDataById(parseInt(id));
  }
  // funcion para adivinar el idioma original de la película
  adivinarIdioma(){
    switch (this.item.original_language.toLowerCase()) {
      case 'es':
        return "español";
      case 'en':
        return "ingles";
      case 'de':
        return 'aleman';
      case 'fr':
        return 'frances';
      case 'ja':
        return 'japones';
        case 'it':
          return 'italiano';
      default:
        return this.item.original_language;
    }
  }
  //Función para buscar en la bbdd la película que has seleccionado
  getDataById(id){
    this.http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=e2ef68da80d5b41a8bac1cafcd3e2b23&language=es-ES").subscribe(data=>{
    var obj= (data as Item);
    console.log(obj);
    this.item=obj;
    this.genre=this.item.genres;
    }),error=>{
      console.log(error);
    }
    return undefined;
  }
  //para conseguir la foto de la pelicula
  getlink(){
    return "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+this.item.poster_path;
  }
  //función para invocar el botón para volver atras (al home)
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
