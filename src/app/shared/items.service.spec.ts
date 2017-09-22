/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Headers, Http } from '@angular/http';

import { ItemsService } from './items.service';
import { HttpStub } from '../../testing/http.stubs';

const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

describe('Service: Items', () => {
  let http: HttpStub;
  let itemsService: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsService,
        {provide: Http, useClass: HttpStub}
      ]
    });
  });

  beforeEach(inject([Http, ItemsService], (h: HttpStub, i: ItemsService) => {
    http = h;
    itemsService = i;
  }));

  it('#all should retrieve all items', () => {
    const spy = spyOn(http, 'get').and.callThrough();

    const expectedResponse = [{
      id: 5,
      name: 'Item 1',
      description: 'First item'
    }];

    http.setExpectedResponse(expectedResponse);

    itemsService.load(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.get).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain('/items');
      });
  });

  it('#load should get one item', () => {
    const spy = spyOn(http, 'get').and.callThrough();

    const expectedResponse = {
      id: 5,
      name: 'Item 1',
      description: 'First item'
    };

    http.setExpectedResponse(expectedResponse);

    itemsService.load(expectedResponse.id)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.get).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain(`/items/${expectedResponse.id}`);
      });
  });

  it('#create should `POST` a new item', () => {
    const spy = spyOn(http, 'post').and.callThrough();

    const expectedResponse = {
      id: 8,
      name: 'Added item',
      description: 'Super sweet item'
    };

    http.setExpectedResponse(expectedResponse);

    itemsService.create(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.post).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain(`/items`);
        expect(spy.calls.mostRecent().args[1]).toEqual(JSON.stringify(expectedResponse));
        expect(spy.calls.mostRecent().args[2]).toEqual(HEADER);
      });
  });

  it('#update should `PUT` and existing item', () => {
    const spy = spyOn(http, 'patch').and.callThrough();

    const expectedResponse = {
      id: 8,
      name: 'Added item',
      description: 'Super sweet item'
    };

    http.setExpectedResponse(expectedResponse);

    itemsService.update(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.patch).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain(`/items/8`);
        expect(spy.calls.mostRecent().args[1]).toEqual(JSON.stringify(expectedResponse));
        expect(spy.calls.mostRecent().args[2]).toEqual(HEADER);
      });
  });

  it('#delete should `DELETE` an item', () => {
    const spy = spyOn(http, 'delete').and.callThrough();

    const expectedResponse = {
      id: 8,
      name: 'Added item',
      description: 'Super sweet item'
    };

    http.setExpectedResponse(expectedResponse);

    itemsService.delete(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.delete).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain(`/items/8`);
      });
  });

  it('#search should...', () => {
    const spy = spyOn(http, 'get').and.callThrough();

    const expectedResponse = [{
      id: 5,
      name: 'Item 1',
      description: 'First item'
    }];

    http.setExpectedResponse(expectedResponse);

    itemsService.search('First item')
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.get).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain('/items');
        expect(spy.calls.mostRecent().args[1].search.get('q')).toBe('First item');
      });
  });
});
