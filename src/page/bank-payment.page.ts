import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirm: ElementFinder;

  constructor () {
    this.confirm = $('#cart_navigation > button > span');
  }

  public async goToOrderSummary(): Promise<void> {
    await this.confirm.click();
  }
}
