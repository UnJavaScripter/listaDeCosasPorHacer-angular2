/// <reference path="../typings/main.d.ts" />

import { ListaDeCosasPorHacerPage } from './app.po';

describe('lista-de-cosas-por-hacer App', function() {
  let page: ListaDeCosasPorHacerPage;

  beforeEach(() => {
    page = new ListaDeCosasPorHacerPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('lista-de-cosas-por-hacer Works!');
  });
});
