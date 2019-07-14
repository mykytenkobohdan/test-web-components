import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ng-card-element',
  templateUrl: './ng-card-element.component.html',
  styleUrls: ['./ng-card-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NgCardElementComponent implements OnInit {
  @Input() title: string;
  @Input() name: string;
  @Input() time = new Date();
  @Input() caption: string;
  @Input() avatar: string;
  @Input() image: string;

  @Output() likeNotify = new EventEmitter<boolean>();
  @Output() shareNotify = new EventEmitter<boolean>();
  @Output() commentNotify = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  likeEvent() {
    this.likeNotify.emit(true);
  }

  shareEvent() {
    this.shareNotify.emit(true);
  }

  commentEvent() {
    this.commentNotify.emit(true);
  }
}
