import { Http, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class HttpStub {
  private expectedResponse;

  setExpectedResponse(response) {
    this.expectedResponse = new Response({body: response} as ResponseOptions);
  }

  get(url) {
    return Observable.of(this.expectedResponse);
  }

  post(url, data) {
    return Observable.of(this.expectedResponse);
  }

  put(url, data) {
    return Observable.of(this.expectedResponse);
  }

  patch(url, data) {
    return Observable.of(this.expectedResponse);
  }

  delete(url) {
    return Observable.of(this.expectedResponse);
  }
}
