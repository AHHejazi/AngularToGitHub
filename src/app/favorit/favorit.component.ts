import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.css']
})
export class FavoritComponent {

@Input('isFave') isFavorit = false;

@Output() change = new EventEmitter();
setfavIcon() {
this.isFavorit = !this.isFavorit;
this.change.emit(); // fire
}

  }

