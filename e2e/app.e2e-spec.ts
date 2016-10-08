import { ListaDeCosasPage } from './app.po';

describe('lista-de-cosas App', function() {
  let page: ListaDeCosasPage;

  beforeEach(() => {
    page = new ListaDeCosasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
