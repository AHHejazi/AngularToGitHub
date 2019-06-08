import { Component, OnInit } from '@angular/core';
import { DBServices } from '../services/db.service';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent  {

  // db enjection
  courses;
constructor(dbservicesr: DBServices) {
this.courses = dbservicesr.getAll();
}


}
