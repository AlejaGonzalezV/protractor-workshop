import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private orderSummaryMenu: ElementFinder;

  constructor() {
    this.orderSummaryMenu = $('#cart_navigation > [type="submit"]');
  }

  public async goToOrderSummary(): Promise<void> {
    await this.orderSummaryMenu.click();
  }
}
