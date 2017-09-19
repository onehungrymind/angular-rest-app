import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular REST App';
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/items', icon: 'work', label: 'Items'},
    { path: '/widgets', icon: 'trending_up', label: 'Widgets'}
  ];
}
