describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('I understand')).tap();
    await element(by.type('RCTRootContentView')).swipe('right', 'fast', 0.5, 0.01, 0.01);
  });

  it('should show all zones', async () => {
    // need to navigate to menu here, but this requires an testid on the menu component
    await element(by.text('Concussion Action Plan')).tap();
    /* await expect(element(by.text('Red Zone'))).toBeVisible();
    await expect(element(by.text('Orange Zone'))).toBeVisible();
    await expect(element(by.text('Yellow Zone'))).toBeVisible();
    await expect(element(by.text('Green Zone'))).toBeVisible(); */
  });
});
