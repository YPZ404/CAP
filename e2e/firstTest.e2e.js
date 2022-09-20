const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  beforeAll(async () => {
    await reloadApp();
  });

  beforeEach(async () => {
    await reloadApp();
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
