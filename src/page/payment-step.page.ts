import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankPaymentMenu: ElementFinder;

  constructor() {
    this.bankPaymentMenu = $('a.bankwire');
  }

  public async goToBankPayment(): Promise<void> {
    await this.bankPaymentMenu.click();
  }
}
