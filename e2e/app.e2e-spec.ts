import { AngularQuoteMachinePage } from './app.po';

describe('angular-quote-machine App', () => {
  let page: AngularQuoteMachinePage;

  beforeEach(() => {
    page = new AngularQuoteMachinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
