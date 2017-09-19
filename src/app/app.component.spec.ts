/* tslint:disable:directive-selector */
/* tslint:disable:component-selector */
/* tslint:disable:directive-class-suffix */
/* tslint:disable:component-class-suffix */

import 'hammerjs';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { Component, Directive, Input } from '@angular/core';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Directive({
  selector: '[routerLink]'
})
class RouterLinkDirectiveStub {
  @Input() routerLink;
}

@Component({
  selector: 'router-outlet',
  template: ''
})
class RouterOutletComponentStub {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ AppMaterialModule, BrowserAnimationsModule ],
      declarations: [ AppComponent, RouterOutletComponentStub, RouterLinkDirectiveStub ],
    }).createComponent(AppComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
