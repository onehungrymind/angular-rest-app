import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared/widgets.service';
import { Widget } from '../shared/widget.model';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  currentWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    this.reset();
  }

  reset() {
    this.currentWidget = { id: null, name: '', description: ''};
  }

  selectWidget(widget) {
    this.currentWidget = widget;
  }

  deleteWidget(widget) {
    console.log('DELETING', widget)
  }

  saveWidget(widget) {
    console.log('SAVING', widget);
  }

  cancel(widget) {
    this.reset();
  }
}
