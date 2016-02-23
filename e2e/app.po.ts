export class ListaDeCosasPorHacerPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('ListaDeCosasPorHacer-app p')).getText(); }
}
