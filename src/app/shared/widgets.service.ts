import { Injectable } from '@angular/core';
import { Widget } from './widget.model';

@Injectable()
export class WidgetsService {
  widgets: Widget[] = [
    {
      id: 1,
      name: 'Red Widget',
      description: 'This is a red widget'
    },
    {
      id: 2,
      name: 'Orange Widget',
      description: 'This is an orange widget'
    },
    {
      id: 3,
      name: 'Yellow Widget',
      description: 'This is a yellow widget'
    },
    {
      id: 4,
      name: 'Green Widget',
      description: 'This is a green widget'
    },
    {
      id: 5,
      name: 'Blue Widget',
      description: 'This is a blue widget'
    },
    {
      id: 6,
      name: 'Indigo Widget',
      description: 'This is a indigo widget'
    },
    {
      id: 7,
      name: 'Violet Widget',
      description: 'This is a violet widget'
    }
  ];

  constructor() { }

}
