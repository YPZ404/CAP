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

    // If user not logged in, check that they get taken to login page
    it('when not logged in, should be taken to login page when trying to access reports', async () => {
        await element(by.text('View Reports')).tap();
        await expect(element(by.text('Preliminary Test Reports'))).tap();
        await expect(element(by.text('Need to Login to see reports'))).toBeVisible();
        await expect(element(by.text('OK'))).toBeVisible();
        await expect(element(by.text('OK'))).tap();
        await expect(element(by.text('Enter your first name and last name to login'))).toBeVisible();
        await expect(element(by.text('First name'))).toBeVisible();
        await expect(element(by.text('Last name'))).toBeVisible();
        await expect(element(by.text('Password'))).toBeVisible();
        await expect(element(by.text('Submit'))).toBeVisible();
        await expect(element(by.text('Sign Up'))).toBeVisible();
    });

    // If user is logged in, check that they can see "No results"
    // DOUBLE CHECK HOW TO DO THIS ONE
    it('No results should be shown for user', async () => {
        await element(by.text('View Reports')).tap();
        await expect(element(by.text('Preliminary Test Reports'))).tap();
        await expect(element(by.text('OK'))).tap();
        await expect(element(by.text('Sign Up'))).tap();
    });
  });
  