import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private shippingStep: ElementFinder;

  constructor () {
    this.shippingStep = $('#center_column [name="processAddress"]');
  }

  public async goToShippingStep(): Promise<void> {
    await this.shippingStep.click();
  }
}
