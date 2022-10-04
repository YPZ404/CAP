describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      await device.reloadReactNative();
      await element(by.text('I understand')).tap();
      await element(by.text('Begin Check')).tap();
      await element(by.text('OK')).tap();
      await element(by.text('Double vision')).tap();
      await element(by.text('Submit')).tap();
    });

    // Check that if any elements are ticked off, user gets taken to "call 000" page
    it('should be taken to 000 page if symptoms are ticked off', async () => {
        await expect(element(by.text('The injured individual is showing severe symptoms \
        and should seek medical attention immediately.'))).toBeVisible();
        await expect(element(by.text('Call 000'))).toBeVisible();
        await expect(element(by.text('Save Report'))).toBeVisible();
    });

    // UNSURE ABOUT THIS ONE, NEED TO DOUBLE CHECK REDIRECTING/TESTING EXPO LINKING
    // Check if pressing "call 000" redirects user to be able to call a number
    it('should be able to call 000', async () => {
        await expect(element(by.text('Call 000'))).tap();
        await expect(element(by.text('Call 0123456789'))).toBeVisible();
        await expect(element(by.text('Cancel'))).toBeVisible();
    });

    // Check that if user presses "save report", they get taken to the login page
    it('should be taken to 000 page if symptoms are ticked off', async () => {
        await expect(element(by.text('Save Report'))).tap();
        await expect(element(by.text('Enter your first name and last name to begin'))).toBeVisible();
        await expect(element(by.text('First name'))).toBeVisible();
        await expect(element(by.text('Last name'))).toBeVisible();
        await expect(element(by.text('Password'))).toBeVisible();
        await expect(element(by.text('Submit'))).toBeVisible();
        await expect(element(by.text('Sign up'))).toBeVisible();
    });


  });