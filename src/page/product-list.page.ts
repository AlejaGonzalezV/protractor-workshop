import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductListPage {
  private addToCartMenu: ElementFinder;

  constructor () {
    this.addToCartMenu = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToAddToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartMenu), 3000);
    await this.addToCartMenu.click();
  }
}
