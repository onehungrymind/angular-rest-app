import { Observable } from 'rxjs/Observable';

export class RouterOutletStub {
  activatedRouteData: {
    [name: string]: any;
  };
}

export class ActivatedRouteStub {
  paramMap = Observable.of({
    params: {id: 5},
    get: function(key) { return this.params[key] }
  });
}
