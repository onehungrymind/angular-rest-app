import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ROUTER_ANIMATION } from './router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ROUTER_ANIMATION]
})
export class AppComponent {
  title = 'Angular REST App';
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/items', icon: 'list', label: 'Items'},
    { path: '/widgets', icon: 'view_quilt', label: 'Widgets'},
    { path: '/profile', icon: 'face', label: 'Profile'}
  ];

  prepareRouterState(router: RouterOutlet) {
    return router.activatedRouteData['animation'] || 'initial';
  }
}
