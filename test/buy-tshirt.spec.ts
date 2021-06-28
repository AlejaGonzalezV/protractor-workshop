import { browser } from 'protractor';
import
{
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');

    await (browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();

    await (browser.sleep(3000));
    await productListPage.goToAddToCart();

    await (browser.sleep(3000));
    await productAddedModalPage.goToShoppingCartSummary();

    await (browser.sleep(3000));
    await summaryStepPage.goToSignIn();

    await (browser.sleep(3000));
    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');

    await (browser.sleep(3000));
    await addressStepPage.goToShippingStep();

    await (browser.sleep(3000));
    await shippingStepPage.goToPaymentStep();

    await (browser.sleep(3000));
    await paymentStepPage.goToBankPayment();

    await (browser.sleep(3000));
    await bankPaymentPage.goToOrderSummary();

    await (browser.sleep(3000));
    await expect(orderSummaryPage.getConfirmation()).toBe('Your order on My Store is complete.');
  });
});
