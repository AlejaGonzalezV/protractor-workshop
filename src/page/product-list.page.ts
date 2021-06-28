import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private tShirtList: ElementFinder;

  constructor () {
    this.tShirtList = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToAddToCart(): Promise<void> {
    await this.tShirtList.click();
  }
}
