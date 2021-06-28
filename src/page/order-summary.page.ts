import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmation: ElementFinder;

  constructor() {
    this.confirmation = $('#center_column > div > p > strong');
  }

  public async getConfirmationMessage(): Promise<string> {
    return this.confirmation.getText();
  }
}
