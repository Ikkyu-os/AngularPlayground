import { RecipeViewerPage } from './app.po';

describe('recipe-viewer App', function() {
  let page: RecipeViewerPage;

  beforeEach(() => {
    page = new RecipeViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rv works!');
  });
});
