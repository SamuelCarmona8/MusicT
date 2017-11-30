import { MusicTPage } from './app.po';

describe('music-t App', function() {
  let page: MusicTPage;

  beforeEach(() => {
    page = new MusicTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
