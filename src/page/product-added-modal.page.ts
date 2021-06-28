import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private shoppingCardMenu: ElementFinder;

  constructor () {
    this.shoppingCardMenu = $('[style*="display: block;"] .button-container > a');
  }

  public async goToShoppingCartSummary(): Promise<void> {
    await this.shoppingCardMenu.click();
  }
}
