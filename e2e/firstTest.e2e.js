describe('Example', () => {
  beforeAll(async () => {
    console.log("spaghetti testing");
    await device.launchApp();
    console.log("finished!");
  });

  beforeEach(async () => {
    console.log("Awaiting react native");
    await device.reloadReactNative();
    console.log("Awaited react native");
  });

  it('should have a disclaimer screen', async () => {
    await expect(element(by.text('Disclaimer'))).toBeVisible();
  });

  it('should show main screen after accepting disclaimer', async () => {
    await element(by.text('I understand')).tap();
    await expect(element(by.text('Concussion Check'))).toBeVisible();
    await expect(element(by.text('Begin Check'))).toBeVisible();
    await expect(element(by.text('View History'))).toBeVisible();
  });
});
