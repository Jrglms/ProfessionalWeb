import { ProfessionalWebPage } from './app.po';

describe('professional-web App', () => {
  let page: ProfessionalWebPage;

  beforeEach(() => {
    page = new ProfessionalWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
