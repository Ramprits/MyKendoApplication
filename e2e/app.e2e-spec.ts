import { MyKendoApplicationPage } from './app.po';

describe('my-kendo-application App', () => {
  let page: MyKendoApplicationPage;

  beforeEach(() => {
    page = new MyKendoApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to yo!!'))
      .then(done, done.fail);
  });
});
