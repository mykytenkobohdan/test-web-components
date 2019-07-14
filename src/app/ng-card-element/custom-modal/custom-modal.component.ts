import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {
  @Input() data;
  @Output() onClose = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.onClose.emit(false);
  }
}
