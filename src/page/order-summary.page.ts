import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmation: ElementFinder;

  constructor() {
    this.confirmation = $('p.cheque-indent');
  }

  public async getConfirmationMessage(): Promise<string> {
    return this.confirmation.getText();
  }
}
