import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ItemsService } from '../../shared/items.service';

import { Item } from '../../shared/item.model';

import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((params: ParamMap) => +params.get('id')),
        switchMap(id => this.itemsService.load(id))
      )
      .subscribe((item: Item) => this.item = item);
  }

  saveItem(item) {
    // Do something
  }

  cancel(item) {
    // Do something
  }

}
