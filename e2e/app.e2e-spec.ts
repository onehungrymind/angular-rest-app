import { AngularRestAppPage } from './app.po';

describe('angular-rest-app App', function() {
  let page: AngularRestAppPage;

  beforeEach(() => {
    page = new AngularRestAppPage();
  });

  it('should display app title as `Angular REST App`', () => {
    page.navigateTo();
    expect<any>(page.getAppTitle()).toEqual('Angular REST App');
  });
});
