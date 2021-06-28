import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private shipping: ElementFinder;

  constructor () {
    this.shipping = $('#center_column > form > p > button > span');
  }

  public async goToShippingStep(): Promise<void> {
    await this.shipping.click();
  }
}
