import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private signInStep: ElementFinder;

  constructor () {
    this.signInStep = $('.cart_navigation span');
  }

  public async goToSignIn(): Promise<void> {
    await this.signInStep.click();
  }
}
