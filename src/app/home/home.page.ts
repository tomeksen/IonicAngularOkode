import { Component } from '@angular/core';
import { DataService,Item,Pelicula } from '../services/data.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listaData:Item[];
  constructor(private data: DataService,private http: HttpClient) {
    this.goLoad();
  }

  
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
   goLoad(){
     this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e2ef68da80d5b41a8bac1cafcd3e2b23&language=en-US&page=20").subscribe(data=>{
    var obj= (data as Pelicula);
    console.log(obj.results);
    this.listaData=obj.results;
    }),error=>{
      console.log(error);
    }
    return undefined;
  }
  /*getMessages(): Message[] {
    return this.data.getMessages();
    
  }*/

}
