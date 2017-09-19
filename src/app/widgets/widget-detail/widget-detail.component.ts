import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css']
})
export class WidgetDetailComponent {
  originalName: string;
  selectedWidget: Widget;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set widget(value: Widget){
    if (value) { this.originalName = value.name; }
    this.selectedWidget = Object.assign({}, value);
  }
}
