describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
    

    // Testing how the "View Reports" page looks like when logged in
    beforeEach(async () => {
        await device.reloadReactNative();
        await element(by.text('I understand')).tap();

        // Signing up and logging in
        await element(by.text('View Reports')).tap();
        await element(by.text('Preliminary Test Reports')).tap();
        await element(by.text('OK')).tap();
        await element(by.text('Sign Up')).tap();
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
    });

    /* // If user is logged in, check that they can see incident reports
    it('User can login to see incident reports in View Reports', async () => {

        // Check that there are no incident reports
        await element(by.text('Incident Reports')).tap();
        await expect(element(by.text('All Incident Reports for William'))).toBeVisible();
        await expect(element(by.text('Return to Home'))).toBeVisible();
    });

    // If user is logged in, check that they can see preliminary reports
    it('User should be able to see preliminary reports in View Reports when logged in', async () => {

      // Check that there are no preliminary test reports
      await element(by.text('Preliminary Test Reports')).tap();
      await expect(element(by.text('All Preliminary Reports for William'))).toBeVisible();
      await expect(element(by.text('No such reports.'))).toBeVisible();
  }); */

    // If user is logged in, check that they can see preliminary reports
    it('User should see prelim reports after doing prelim tests', async () => {

        // Check that there are no preliminary test reports
        await element(by.type('RCTRootContentView')).swipe('right', 'fast', 0.5, 0.01, 0.01);
        await element(by.text('Preliminary Tests')).tap();
        await element(by.text('Start!')).tap();
        await element(by.text('Start!')).tap();
        await element(by.text('Next')).tap();
        await element(by.text('Next')).tap();
        await element(by.text('Next')).tap();
        await element(by.text('Next')).tap();
        await element(by.text('Submit')).tap();
        await element(by.text('Next')).tap();
        await element(by.type('RCTRootContentView')).tap({x: 200, y: 500});

        // Perform reaction tests
        await waitFor(element(by.text('Press!'))).toBeVisible().withTimeout(7000).then(async () => {
            await element(by.text('Press!')).tap();
        });
        await element(by.type('RCTRootContentView')).tap({x: 200, y: 500});

        await waitFor(element(by.text('Press!'))).toBeVisible().withTimeout(7000).then(async () => {
            await element(by.text('Press!')).tap();
        });
        await element(by.type('RCTRootContentView')).tap({x: 200, y: 500});

        await waitFor(element(by.text('Press!'))).toBeVisible().withTimeout(7000).then(async () => {
            await element(by.text('Press!')).tap();
        });
        await element(by.type('RCTRootContentView')).tap({x: 200, y: 500});
        await element(by.text('Next')).tap();

        // Perform balance tests
        await device.disableSynchronization();
        await element(by.text('Start!')).tap();
        await waitFor(element(by.text('Next'))).toBeVisible().withTimeout(11000).then(async () => {
            await element(by.text('Next')).tap();
        });
        await element(by.text('Start!')).tap();

        await waitFor(element(by.text('Next'))).toBeVisible().withTimeout(11000).then(async () => {
            await element(by.text('Next')).tap();
        });
        await element(by.text('Next')).tap();
        await element(by.text('Next')).tap();
        
        await element(by.text('Start!')).tap();

        await waitFor(element(by.text('Alert'))).toBeVisible().withTimeout(15000).then(async () => {
            await element(by.text('Yes')).tap();
        });

        await element(by.text('Next')).tap();
        await element(by.text('Next')).tap();
        await element(by.text('Next')).tap();
        await element(by.text('Submit')).tap();

        // Save test results to profile
        await element(by.text('Save Report')).tap();
        await element(by.text('Save to logged profile')).tap();

        // See prelim test results
        await element(by.text('View Reports')).tap();
        await element(by.text('Preliminary Test Reports')).tap();

        // Ignore balance tests, check if results are added to profile
        await element(by.type('RCTRootContentView')).swipe('right', 'fast', 0.5, 0.01, 0.01);
        await element(by.text('Home Page')).tap();
        await element(by.text('View Reports')).tap();
        await element(by.text('Preliminary Test Reports')).tap();
        await expect(element(by.text('Memory Test 1: FAIL'))).toBeVisible();
        await expect(element(by.text('Memory Test 2: FAIL'))).toBeVisible();
        await expect(element(by.text('Reaction Test: PASS'))).toBeVisible();
        await expect(element(by.text('Balance Test 1: UNDEFINED'))).toBeVisible();
        await expect(element(by.text('Balance Test 1: UNDEFINED'))).toBeVisible();
    });
});
  