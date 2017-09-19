import { AngularRestAppPage } from './app.po';

describe('angular-rest-app App', function() {
  let page: AngularRestAppPage;

  beforeEach(() => {
    page = new AngularRestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
