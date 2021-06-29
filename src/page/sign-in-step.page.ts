import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private password: ElementFinder;
  private signIn: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.password = $('#passwd');
    this.signIn = $('#SubmitLogin');
  }

  public async login(email: string, password: string): Promise<void> {
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    await this.signIn.click();
  }
}
