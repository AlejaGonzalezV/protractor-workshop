import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmation: ElementFinder;

  constructor() {
    this.confirmation = $('#center_column > div > p > strong');
  }

  public async getConfirmation(): Promise<string> {
    return this.confirmation.getText();
  }
}
