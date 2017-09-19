/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { ItemsService } from './items.service';

class HttpStub {}

describe('Service: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsService,
        {provide: Http, useClass: HttpStub}
      ]
    });
  });

  it('should exist', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
