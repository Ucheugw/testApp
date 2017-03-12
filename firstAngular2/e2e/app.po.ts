import { browser, element, by } from 'protractor';

export class FirstAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-app h1')).getText();
  }
}
