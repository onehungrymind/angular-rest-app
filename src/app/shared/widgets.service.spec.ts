/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { WidgetsService } from './widgets.service';

class HttpStub {}

describe('Service: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WidgetsService,
        {provide: Http, useClass: HttpStub}
      ]
    });
  });

  it('should exist', inject([WidgetsService], (service: WidgetsService) => {
    expect(service).toBeTruthy();
  }));
});
