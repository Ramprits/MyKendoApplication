import { browser, by, element } from 'protractor';

export class MyKendoApplicationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yo-root h1')).getText();
  }
}
