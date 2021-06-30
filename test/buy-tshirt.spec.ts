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

describe('Go to Shopping page', () => {
  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
  });

  describe('Buy a t-shirt', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.goToAddToCart();
      await productAddedModalPage.goToShoppingCartSummary();
      await summaryStepPage.goToSignIn();
    });

    describe('Login in the app', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('Select address and shipping', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();

          await addressStepPage.goToShippingStep();
          await shippingStepPage.goToPaymentStep();
        });

        describe('Bank payment', () => {
          const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
          beforeAll(async () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            await paymentStepPage.goToBankPayment();
            await bankPaymentPage.goToOrderSummary();
          });
          it('then should be bought a t-shirt', async () => {
            await expect(orderSummaryPage.getConfirmationMessage())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
