import { FoundationPage } from './app.po';

describe('foundation App', function() {
  let page: FoundationPage;

  beforeEach(() => {
    page = new FoundationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
