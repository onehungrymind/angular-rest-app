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
    this.getWidgets();
    this.resetCurrentWidget();
  }

  resetCurrentWidget() {
    this.currentWidget = { id: null, name: '', description: '' };
  }

  selectWidget(widget) {
    this.currentWidget = widget;
  }

  cancel(widget) {
    this.resetCurrentWidget();
  }

  getWidgets() {
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
  }

  saveWidget(widget) {
    if (!widget.id) {
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }

  createWidget(widget) {
    this.widgetsService.create(widget)
      .subscribe(response => {
        this.getWidgets();
        this.resetCurrentWidget();
      });
  }

  updateWidget(widget) {
    this.widgetsService.update(widget)
      .subscribe(response => {
        this.getWidgets();
        this.resetCurrentWidget();
      });
  }

  deleteWidget(widget) {
    this.widgetsService.delete(widget)
      .subscribe(response => {
        this.getWidgets();
        this.resetCurrentWidget();
      });
  }
}
