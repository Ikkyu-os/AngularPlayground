import { browser, element, by } from 'protractor';

export class RecipeViewerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rv-root h1')).getText();
  }
}
