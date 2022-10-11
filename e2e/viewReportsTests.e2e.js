describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      await device.reloadReactNative();
      await element(by.text('I understand')).tap();
    });
  
    // Check that user gets taken to reports page
    it('when pressing view reports, should be taken to reports page', async () => {
        await element(by.text('View Reports')).tap();
        await expect(element(by.text('Which reports would you like to access?'))).toBeVisible();
        await expect(element(by.text('Preliminary Test Reports'))).toBeVisible();
        await expect(element(by.text('Incident Reports'))).toBeVisible();
    });

    // If user not logged in, check that they get taken to login page when pressing "Preliminary Test Reports"
    it('when not logged in, should be taken to login page when trying to access reports', async () => {
        await element(by.text('View Reports')).tap();
        await element(by.text('Preliminary Test Reports')).tap();
        await expect(element(by.text('Alert'))).toBeVisible();
        await expect(element(by.text('Need to Login to see reports'))).toBeVisible();
        await expect(element(by.text('OK'))).toBeVisible();
        await element(by.text('OK')).tap();
        await expect(element(by.text('Enter your first name and last name to login'))).toBeVisible();
        await expect(element(by.text('First Name'))).toBeVisible();
        await expect(element(by.text('Last Name'))).toBeVisible();
        await expect(element(by.text('Password'))).toBeVisible();
        await expect(element(by.text('Submit'))).toBeVisible();
        await expect(element(by.text('Sign Up'))).toBeVisible();
    });

    // If user is logged in, check that they can see incident reports
    it('User can login to see incident reports in View Reports', async () => {
        await element(by.text('View Reports')).tap();
        await element(by.text('Preliminary Test Reports')).tap();
        await element(by.text('OK')).tap();
        await element(by.text('Sign Up')).tap();

        // Signing up
        await element(by.type('RCTUITextField')).atIndex(0).typeText('William');
        await element(by.type('RCTUITextField')).atIndex(1).typeText('Johnson');
        await element(by.type('RCTUITextField')).atIndex(2).typeText('16');
        await element(by.type('RCTUITextField')).atIndex(3).typeText('80');
        await element(by.type('RCTUITextField')).atIndex(4).typeText('hey123');
        await element(by.text('Submit')).tap();
        await element(by.type('RCTRootContentView')).swipe('right', 'fast', 0.5, 0.01, 0.01);
        await element(by.text('Login')).tap();
        await element(by.type('RCTUITextField')).atIndex(0).typeText('William');
        await element(by.type('RCTUITextField')).atIndex(1).typeText('Johnson');
        await element(by.type('RCTUITextField')).atIndex(2).typeText('hey123');
        await element(by.text('Submit')).tap();
        await element(by.text('View Reports')).tap();

        // Check that there are no incident reports
        await element(by.text('Incident Reports')).tap();
        await expect(element(by.text('All Incident Reports for William'))).toBeVisible();
        await expect(element(by.text('Return to Home'))).toBeVisible();
    });

    // If user is logged in, check that they can see preliminary reports
    it('User should be able to see preliminary reports in View Reports when logged in', async () => {
      jest.setTimeout(100000);
      await element(by.text('View Reports')).tap();
      await element(by.text('Preliminary Test Reports')).tap();
      await element(by.text('OK')).tap();
      await element(by.text('Sign Up')).tap();

      // Signing up
      await element(by.type('RCTUITextField')).atIndex(0).typeText('William');
      await element(by.type('RCTUITextField')).atIndex(1).typeText('Johnson');
      await element(by.type('RCTUITextField')).atIndex(2).typeText('16');
      await element(by.type('RCTUITextField')).atIndex(3).typeText('80');
      await element(by.type('RCTUITextField')).atIndex(4).typeText('hey123');
      await element(by.text('Submit')).tap();
      await element(by.type('RCTRootContentView')).swipe('right', 'fast', 0.5, 0.01, 0.01);
      await element(by.text('Login')).tap();
      await element(by.type('RCTUITextField')).atIndex(0).typeText('William');
      await element(by.type('RCTUITextField')).atIndex(1).typeText('Johnson');
      await element(by.type('RCTUITextField')).atIndex(2).typeText('hey123');
      await element(by.text('Submit')).tap();
      await element(by.text('View Reports')).tap();

      // Check that there are no preliminary test reports
      await element(by.text('Preliminary Test Reports')).tap();
      await expect(element(by.text('All Preliminary Reports for William'))).toBeVisible();
      await expect(element(by.text('No such reports.'))).toBeVisible();
  });
});
  