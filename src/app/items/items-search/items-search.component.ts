import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ItemsService } from '../../shared/items.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {
  @Output() onResults = new EventEmitter();
  @ViewChild('itemsSearch') itemsSearch;

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {
    const search$ = Observable.fromEvent(this.getNativeElement(this.itemsSearch), 'keyup')
      .debounceTime(400)
      .distinctUntilChanged()
      .map((event: any) => event.target.value)
      .switchMap(term => this.itemsService.search(term))
      .subscribe(items => this.onResults.emit(items));
  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
