import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class peliculaComponent implements OnInit {
  @Input() message: Message;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
