import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private productAdded: ElementFinder;

  constructor () {
    this.productAdded = $('[style*="display: block;"] .button-container > a');
  }

  public async goToShoppingCartSummary(): Promise<void> {
    await this.productAdded.click();
  }
}
