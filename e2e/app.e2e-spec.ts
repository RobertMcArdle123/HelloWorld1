import { HelloWorld1Page } from './app.po';

describe('hello-world1 App', function() {
  let page: HelloWorld1Page;

  beforeEach(() => {
    page = new HelloWorld1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
