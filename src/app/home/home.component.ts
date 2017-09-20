import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }
}
