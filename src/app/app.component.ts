import {Component, Injector, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  features: any[] = [];
  content = null;

  constructor(private injector: Injector, domSanitizer: DomSanitizer) {
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml('<alert-element message="Custom element component"></alert-element>');
    }, 100);
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
