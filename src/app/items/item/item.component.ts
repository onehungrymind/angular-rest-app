import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ItemsService } from '../../shared/items.service';

import 'rxjs/add/operator/switchMap';
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.itemsService.load(+params.get('id')))
      .subscribe(item => this.item = item);
  }

  saveItem(item) {
    // Do something
  }

  cancel() {
    // Do something
  }

}
