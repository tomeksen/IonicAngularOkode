import { Component } from '@angular/core';
import { Item,Pelicula } from '../services/data.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //creo las variable que voy a usar
  public listaData:Item[];
  textoBuscar="";
  textInput:string;

  constructor(private http: HttpClient) {
    //lanzo la primera ejecucion para que cargue los objetos en la página
    this.goLoad();
  }
  
  //recarga de la pagina
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
  //evento que se crea en la searchBar cada vez que cambias datos el imput
  buscar(event){
    this.textoBuscar=event.detail.value;
  }
  //Función que busca en la base de datos peliculas para añadir a la lista en home
   goLoad(){
    this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e2ef68da80d5b41a8bac1cafcd3e2b23&language=es-ES&page=20").subscribe(data=>{
    var obj= (data as Pelicula);
    console.log(obj.results);
    this.listaData=obj.results;
    }),error=>{
      console.log(error);
    }
    return undefined;
  }
  //función para buscar la película que quieras por el nombre
  async goSearch(){
    await this.http.get("https://api.themoviedb.org/3/search/movie?api_key=e2ef68da80d5b41a8bac1cafcd3e2b23&language=es-ES&query="+this.textInput+"&page=1&include_adult=false").subscribe(data=>{
    var obj= (data as Pelicula);
    console.log(obj.results);
    this.listaData=obj.results;
    }),error=>{
      console.log(error);
    }
    return undefined;
  }


}
