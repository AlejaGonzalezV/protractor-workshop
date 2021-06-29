import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private signInStep: ElementFinder;

  constructor () {
    this.signInStep = $('#center_column [title="Proceed to checkout"]');
  }

  public async goToSignIn(): Promise<void> {
    await this.signInStep.click();
  }
}
