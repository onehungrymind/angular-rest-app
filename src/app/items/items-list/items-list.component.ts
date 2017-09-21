import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../shared';
import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter, :leave, * => pending', []), // no animations if pending
      transition('* => *', [
        // animate both the newly entered and removed items on the page
        // at the same time
        group([
          query(':enter', [
            style({ opacity: 0, height: '0px' }),
            stagger('50ms', [
              animate('500ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ], { optional: true }),

          query(':leave', [
            stagger('50ms', [
              animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, height: '0px', borderTop: 0, borderBottom: 0 }))
            ])
          ], { optional: true })
        ]),
      ]),
    ]),
  ]
})
export class ItemsListComponent implements OnInit {
  @Input() items: Item[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  animationsDisabled = true;

  trackItem(index, item) {
    return item.id;
  }

  ngOnInit() {
    setTimeout(() => {
      this.animationsDisabled = false;
    }, 500)
  }

  prepareListState() {
    return this.items ? this.items.length : 'pending';
  }
}
