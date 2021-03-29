import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Item, Message } from '../services/data.service';

@Component({
  selector: 'app-view-pelicula',
  templateUrl: './view-pelicula.page.html',
  styleUrls: ['./view-pelicula.page.scss'],
})
export class ViewPeliculaPage implements OnInit {
  public item: Item;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.item = this.data.getMessageById(parseInt(id, 10));
  }
  getDataById(){

  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
