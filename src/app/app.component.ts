import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shareApp';
  isActive = false;

  peopleByCountry: any[] =
  [
    {
      'country': 'Egypt',
       'Names': [
         {name: 'ItShare'},
         {name: 'Trainih'}
       ]
    },
    {
      country: 'Turkey',
      'Names': [
        {name: 'TurkeyShare'},
        {name: 'Hejazi Ahmad'},
        {name: 'Hejazi Abd'}
      ]
    }
  ];
  persons: string[] = ['Ahmad', 'Amer', 'Fadi'];

  employees = {
  position : 'Ahmad Hejazi Ahmad Hejazi Ahmad Hejazi Ahmad Hejazi Ahmad Hejazi Ahmad Hejazi Ahmad Hejazi Ahmad Hejazi ',
  rating: 5.97,
  salary: 2000,
  hiringDate: new Date(2015, 5, 1)
  };

  fireEvent() {
    alert('heloow world');
  }
}
