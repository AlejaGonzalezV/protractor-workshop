import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private checkbox: ElementFinder;
  private payment: ElementFinder;

  constructor () {
    this.checkbox = $('#cgv');
    this.payment = $('#form > p > button > span');
  }

  public async goToPaymentStep(): Promise<void> {
    await this.checkbox.click();
    await this.payment.click();
  }
}
