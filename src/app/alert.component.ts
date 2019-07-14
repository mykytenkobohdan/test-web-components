import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  template: '<div>Alert message : {{message}}</div>',
  styles: [`
    div {
      background: blueviolet;
      border-radius: 4px;
      padding: 15px;
      color: #fff;
    }
  `]
})

export class AlertComponent {
  @Input() message: string;
}
