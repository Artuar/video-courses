import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getWrapper() {
    return element(by.css('app-root .wrapper')).getText();
  }
}
