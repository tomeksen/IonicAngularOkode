import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Item, Message } from '../services/data.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-pelicula',
  templateUrl: './view-pelicula.page.html',
  styleUrls: ['./view-pelicula.page.scss'],
})
export class ViewPeliculaPage implements OnInit {
  public item: Item;

  constructor(private http: HttpClient,
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.item = this.data.getMessageById(parseInt(id, 10));
  }
  getDataById(){//https://api.themoviedb.org/3/movie/{movie_id}?api_key=e2ef68da80d5b41a8bac1cafcd3e2b23&language=es-ES
    this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e2ef68da80d5b41a8bac1cafcd3e2b23&language=es-ES&page=20").subscribe(data=>{
    var obj= (data as Pelicula);
    console.log(obj.results);
    this.listaData=obj.results;
    }),error=>{
      console.log(error);
    }
    return undefined;
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
