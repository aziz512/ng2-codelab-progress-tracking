import { Ng2CodelabTrackerPage } from './app.po';

describe('ng2-codelab-tracker App', function() {
  let page: Ng2CodelabTrackerPage;

  beforeEach(() => {
    page = new Ng2CodelabTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
