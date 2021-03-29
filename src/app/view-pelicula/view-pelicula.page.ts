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
  constructor(private http: HttpClient,
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { 
}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDataById(parseInt(id));
  }
  getDataById(id){//https://api.themoviedb.org/3/movie/{movie_id}?api_key=e2ef68da80d5b41a8bac1cafcd3e2b23&language=es-ES
    this.http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=e2ef68da80d5b41a8bac1cafcd3e2b23&language=es-ES").subscribe(data=>{
    var obj= (data as Item);
    console.log(obj);
    this.item=obj;
    this.genre=this.item.genres;
    console.log(this.item.genres)
    }),error=>{
      console.log(error);
    }
    return undefined;
  }
  getlink(){
    return "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+this.item.poster_path;
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
