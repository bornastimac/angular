import { PrettyIPPage } from './app.po';

describe('pretty-ip App', function() {
  let page: PrettyIPPage;

  beforeEach(() => {
    page = new PrettyIPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
