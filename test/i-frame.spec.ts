import { browser } from 'protractor';
import {
  IFramePage,
} from '../src/page';

describe('Given a practice iframe page', () => {
  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/frames');
  });

  describe('When the height of an iframe is modified', () => {
    const iFramePage: IFramePage = new IFramePage();
    beforeAll(async () => {
      await iFramePage.setFormFrameHeight(500);
    });

    it('Then it should have a new height', async () => {
      expect(await iFramePage.getIframeHeight()).toEqual(500);
    });
  });
});
