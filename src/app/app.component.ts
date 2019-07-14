import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  features: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.features = [
      {
        link: 'https://angular.io/tutorial',
        name: 'Tour of Heroes'
      },
      {
        link: 'https://angular.io/tutorial',
        name: 'Tour of Heroes'
      },
      {
        link: 'https://angular.io/tutorial',
        name: 'Tour of Heroes'
      },
      {
        link: 'https://angular.io/tutorial',
        name: 'Tour of Heroes'
      }
    ];
  }
}
