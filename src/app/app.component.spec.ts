import 'hammerjs';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutletStub } from '../testing/router.stubs';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NotificationsService } from './shared/notifications.service';
import { MdSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class NotificationsServiceStub {
  notifications$ = Observable.of({})
}
class MdSnackBarStub {
  open() {}
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let router: RouterOutletStub;
  let links: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ AppMaterialModule, BrowserAnimationsModule, RouterTestingModule ],
      declarations: [ AppComponent ],
      providers: [
        {provide: RouterOutlet, useClass: RouterOutletStub},
        {provide: MdSnackBar, useClass: MdSnackBarStub},
        {provide: NotificationsService, useClass: NotificationsServiceStub}
      ]
    }).createComponent(AppComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    router = fixture.debugElement.injector.get(RouterOutlet);
    fixture.detectChanges();

    links = de.queryAll(By.css('nav a'));
  });

  it('should have a title called `Angular REST App`', () => {
    expect(component.title).toBe('Angular REST App');
  });

  it('should have four links', () => {
    expect(links.length).toBe(4);
  });

  it('should link to `home`', () => {
    const link = links.find(l => l.properties.href === '/home');
    expect(link).toBeDefined();
  });

  it('should link to `items`', () => {
    const link = links.find(l => l.properties.href === '/items');
    expect(link).toBeDefined();
  });

  it('should link to `widgets`', () => {
    const link = links.find(l => l.properties.href === '/widgets');
    expect(link).toBeDefined();
  });

  it('should link to `profile`', () => {
    const link = links.find(l => l.properties.href === '/profile');
    expect(link).toBeDefined();
  });

  describe('#prepareRouterState', () => {
    it('should return `Router.activatedRouteData.animation` if it has a value', () => {
      router.activatedRouteData = {animation: 'foo'};
      const result = component.prepareRouterState(router as RouterOutlet);
      expect(result).toBe('foo');
    });

    it('should return `initial` by default', () => {
      router.activatedRouteData = {};
      const result = component.prepareRouterState(router as RouterOutlet);
      expect(result).toBe('initial');
    });
  });

  it('should have an @routerAnimations trigger set to `initial`', () => {
    const routerContainer = de.query(By.css('.app-content'));
    expect(routerContainer.properties['@routerAnimations']).toBe('initial');
  });
});
