import { TestBed, inject } from '@angular/core/testing';

import { WidgetsService } from './widgets.service';

describe('WidgetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetsService]
    });
  });

  it('should be created', inject([WidgetsService], (service: WidgetsService) => {
    expect(service).toBeTruthy();
  }));
});
