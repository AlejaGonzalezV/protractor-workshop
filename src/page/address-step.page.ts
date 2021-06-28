import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private shippingStep: ElementFinder;

  constructor () {
    this.shippingStep = $('#center_column > form > p > button > span');
  }

  public async goToShippingStep(): Promise<void> {
    await this.shippingStep.click();
  }
}
