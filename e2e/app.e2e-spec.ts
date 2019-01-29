import { BpTeamPresentationPage } from './app.po';

describe('bp-team-presentation App', () => {
  let page: BpTeamPresentationPage;

  beforeEach(() => {
    page = new BpTeamPresentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
