import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfService: ElementFinder;
  private paymentStep: ElementFinder;

  constructor () {
    this.termsOfService = $('#cgv');
    this.paymentStep = $('#form [name="processCarrier"]');
  }

  public async goToPaymentStep(): Promise<void> {
    await this.termsOfService.click();
    await this.paymentStep.click();
  }
}
