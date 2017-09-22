import { browser, element, by } from 'protractor';

export class AngularRestAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitle() {
    return element(by.css('app-root md-toolbar-row > span')).getText();
  }
}
