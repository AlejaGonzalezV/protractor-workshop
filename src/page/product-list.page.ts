import {
  $, $$, ElementArrayFinder, ElementFinder, ExpectedConditions, browser,
} from 'protractor';

export class ProductListPage {
  private addToCartBtn: ElementFinder;

  private products: ElementArrayFinder;

  constructor() {
    this.products = $$('.product_list.row');
    this.addToCartBtn = $('#add_to_cart > button');
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products.filter(
      (product: ElementFinder) => product.$('[itemprop="name"]').getText().then((text : string) => text === productName)
    ).first();
  }

  public async selectProduct(productName: string): Promise<void> {
    const product = this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(product.$('img')), 3000);
    product.$('img').click();
  }

  public async goToAddToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartBtn), 3000);
    await this.addToCartBtn.click();
  }
}
