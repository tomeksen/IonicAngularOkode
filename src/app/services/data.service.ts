import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface Item{
    id:number;
    genre_ids:[];
    original_title:string;
    original_lenguage:string;
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
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
  ];
  constructor(private http: HttpClient) { }
  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
