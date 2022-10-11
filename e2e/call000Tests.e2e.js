describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      await device.reloadReactNative();
      await element(by.text('I understand')).tap();
      await element(by.text('Begin Check')).tap();
      await element(by.text('OK')).tap();
      await element(by.type('RCTRootContentView')).tap({x: 70, y: 520});
      await element(by.text('Submit')).tap();
    });

    // Check that if any elements are ticked off, user gets taken to "call 000" page
    it('should be taken to 000 page if symptoms are ticked off', async () => {
        await expect(element(by.text('The injured individual is showing severe symptoms and should seek medical attention immediately.'))).toBeVisible();
        await expect(element(by.text('Call 000'))).toBeVisible();
        await expect(element(by.text('Save Report'))).toBeVisible(); 
    });

    // Check that if user presses "save report", they get taken to the login page
    it('should be taken to 000 page if symptoms are ticked off', async () => {
        await element(by.text('Save Report')).tap();
        await expect(element(by.text('Enter your first name and last name to login'))).toBeVisible();
        await expect(element(by.text('First Name'))).toBeVisible();
        await expect(element(by.text('Last Name'))).toBeVisible();
        await expect(element(by.text('Password'))).toBeVisible();
        await expect(element(by.text('Submit'))).toBeVisible();
        await expect(element(by.text('Sign Up'))).toBeVisible();
    });
  });