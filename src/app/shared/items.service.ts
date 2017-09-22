import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Item } from './item.model';

const BASE_URL = 'http://localhost:3000/items/';

const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class ItemsService {
  constructor(private http: Http) {
  }

  all() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json());
  }

  create(item: Item) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json());
  }

  update(item: Item) {
    return this.http.patch(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      .map(res => res.json());
  }

  delete(item: Item) {
    return this.http.delete(`${BASE_URL}${item.id}`)
      .map(res => res.json());
  }

  search(term: string) {
    const search = new URLSearchParams();
    search.set('q', term);

    return this.http.get(`${BASE_URL}`, {search})
      .map(res => res.json());
  }
}
