import { TimeConversionPage } from './app.po';

describe('time-conversion App', () => {
  let page: TimeConversionPage;

  beforeEach(() => {
    page = new TimeConversionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
