/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { WidgetsComponent } from './widgets.component';
import { WidgetsService } from '../shared';

class WidgetsServiceStub {}

describe('Component: Items', () => {
  let comp: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetsComponent
      ],
      providers: [
        {provide: WidgetsService, useClass: WidgetsServiceStub}
      ]
    });

    fixture = TestBed
      .overrideComponent(WidgetsComponent, {set: {template: ''}})
      .createComponent(WidgetsComponent);

    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
