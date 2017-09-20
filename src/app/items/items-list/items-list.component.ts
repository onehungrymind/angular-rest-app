import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from '../../shared';
import { trigger, transition, state, group, style, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  @Input() items: Item[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
