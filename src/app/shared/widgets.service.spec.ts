/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { WidgetsService } from './widgets.service';

class HttpStub {}

describe('Service: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WidgetsService,
        {provide: HttpClient, useClass: HttpStub}
      ]
    });
  });

  it('should exist', inject([WidgetsService], (service: WidgetsService) => {
    expect(service).toBeTruthy();
  }));
});
