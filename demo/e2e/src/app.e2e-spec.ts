import { AngularMaterialExtensionsLayoutDemoPage } from './app.po';

describe('@angular-material-extensions/layout-demo App', () => {
  let page: AngularMaterialExtensionsLayoutDemoPage;

  beforeEach(() => {
    page = new AngularMaterialExtensionsLayoutDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
