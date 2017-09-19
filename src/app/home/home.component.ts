import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { WidgetsService } from '../shared/widgets.service';
import { Item } from '../shared/item.model';
import { Widget } from '../shared/widget.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: Widget[];

  constructor(private itemsService: ItemsService,
              private widgetsService: WidgetsService) {
  }

  ngOnInit() {
    this.getItems();
    this.getWidgets();
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }

  getWidgets() {
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
  }

  handleResults(items) {
    this.items = items;
  }
}
