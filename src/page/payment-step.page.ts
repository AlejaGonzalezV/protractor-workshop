import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankPaymentMenu: ElementFinder;

  constructor () {
    this.bankPaymentMenu = $('#HOOK_PAYMENT [title="Pay by bank wire"]');
  }

  public async goToBankPayment(): Promise<void> {
    await this.bankPaymentMenu.click();
  }
}
