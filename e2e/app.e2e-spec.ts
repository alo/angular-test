import { CodertyFrontPage } from './app.po';

describe('coderty-front App', () => {
  let page: CodertyFrontPage;

  beforeEach(() => {
    page = new CodertyFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
