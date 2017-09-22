/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { ItemsComponent } from './items.component';
import { ItemsService } from '../shared';
import { NotificationsService } from '../shared/notifications.service';

class ItemsServiceStub {}
class NotificationsServiceStub {}

describe('Component: Items', () => {
  let comp: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemsComponent
      ],
      providers: [
        {provide: ItemsService, useClass: ItemsServiceStub},
        {provide: NotificationsService, useClass: NotificationsServiceStub}
      ]
    });

    fixture = TestBed
      .overrideComponent(ItemsComponent, {set: {template: ''}})
      .createComponent(ItemsComponent);

    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
