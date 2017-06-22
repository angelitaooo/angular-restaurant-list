import { AngularRestaurantListPage } from './app.po';

describe('angular-restaurant-list App', () => {
  let page: AngularRestaurantListPage;

  beforeEach(() => {
    page = new AngularRestaurantListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
