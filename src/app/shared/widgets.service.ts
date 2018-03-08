import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Widget } from './widget.model';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(BASE_URL)
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`)
  }

  create(widget: Widget) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER)
  }

  update(widget: Widget) {
    return this.http.patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
  }

  delete(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`)
  }
}
