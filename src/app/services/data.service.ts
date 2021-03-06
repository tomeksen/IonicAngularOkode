import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
export interface genre_ids{
  id:number;
  name:string
}
export interface Item{
    id:number;
    genres:genre_ids;
    original_title:string;
    original_language:string;
    media_type:string;
    overview:string;
    release_date:string;
    title:string;
    vote_average: number;
    poster_path:string;
}
export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}
export interface Pelicula{
  page:number;
  results:Item[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

}
