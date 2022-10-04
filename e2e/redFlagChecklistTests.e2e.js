describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      await device.reloadReactNative();
      await element(by.text('I understand')).tap();
      await element(by.text('Begin Check')).tap();
    });
    
    // Check that alert message is displayed
    it('should show alert message', async () => {
        await expect(element(by.text('Alert'))).toBeVisible();
        await expect(element(by.text('We strongly recommend you have someone else \
        do the concussion check for you'))).toBeVisible();
        await expect(element(by.text('Cancel'))).toBeVisible();
        await expect(element(by.text('OK'))).toBeVisible();
    });

    // Check that if we tap "Cancel" after alert message, we will be taken to home page
    it('if pressing cancel on alert message, take back to homepage', async () => {
        await expect(element(by.text('Cancel'))).tap();
        await expect(element(by.text('Concussion Check'))).toBeVisible();
        await expect(element(by.text('Begin Check'))).toBeVisible();
        await expect(element(by.text('View Reports'))).toBeVisible();
    });

    // Check that red flag checklist displays
    it('red flag checklist should display all symptoms', async () => {
        await expect(element(by.text('OK'))).tap();
        await expect(element(by.text('Red Flag Checklist'))).toBeVisible();
        await expect(element(by.text('Are any of the following symptoms present? Select \
        all that apply'))).toBeVisible();
        await expect(element(by.text('Neck pain or tenderness'))).toBeVisible();
        await expect(element(by.text('Double vision'))).toBeVisible();
        await expect(element(by.text('Weakness or tingling/burning in the arms or legs'))).toBeVisible();
        await expect(element(by.text('Severe or increasing headache'))).toBeVisible();
        await expect(element(by.text('Seizures or convulsions'))).toBeVisible();
        await expect(element(by.text('Loss of consciousness'))).toBeVisible();
        await expect(element(by.text('Deterioriating conscious state'))).toBeVisible();
        await expect(element(by.text('Vomiting'))).toBeVisible();
        await expect(element(by.text('Increasing restlessness'))).toBeVisible();
        await expect(element(by.text('Agitation or combativeness'))).toBeVisible();
        await expect(element(by.text('Submit'))).toBeVisible();
    });

    // Check that elements are initially not ticked off 
    it('elements should be initially not be ticked off in checklist', async () => {
        await expect(element(by.text('OK'))).tap();
        expect(!(document.getElementById('Vomiting')).is(':checked'));
        expect(!(document.getElementById('Neck pain or tenderness')).is(':checked'));
        expect(!(document.getElementById('Double vision')).is(':checked'));
        expect(!(document.getElementById('Weakness or tingling/burning in the arms or legs')).is(':checked'));
        expect(!(document.getElementById('Severe or increasing headache')).is(':checked'));
        expect(!(document.getElementById('Seizures or convulsions')).is(':checked'));
        expect(!(document.getElementById('Loss of consciousness')).is(':checked'));
        expect(!(document.getElementById('Deterioriating conscious state')).is(':checked'));
        expect(!(document.getElementById('Increasing restlessness')).is(':checked'));
        expect(!(document.getElementById('Agitation or combativeness')).is(':checked'));
    });

    // Check that elements are ticked off when clicking on them
    it('elements should be ticked off in red flag checklist when pressed', async () => {
        await expect(element(by.text('OK'))).tap();
        await expect(element(by.text('Neck pain or tenderness'))).tap();
        await expect(element(by.text('Double vision'))).tap();
        await expect(element(by.text('Weakness or tingling/burning in the arms or legs'))).tap();
        await expect(element(by.text('Severe or increasing headache'))).tap();
        await expect(element(by.text('Seizures or convulsions'))).tap();
        await expect(element(by.text('Loss of consciousness'))).tap();
        await expect(element(by.text('Deterioriating conscious state'))).tap();
        await expect(element(by.text('Vomiting'))).tap();
        await expect(element(by.text('Increasing restlessness'))).tap();
        await expect(element(by.text('Agitation or combativeness'))).tap();

        expect((document.getElementById('Vomiting')).is(':checked'));
        expect((document.getElementById('Neck pain or tenderness')).is(':checked'));
        expect((document.getElementById('Double vision')).is(':checked'));
        expect((document.getElementById('Weakness or tingling/burning in the arms or legs')).is(':checked'));
        expect((document.getElementById('Severe or increasing headache')).is(':checked'));
        expect((document.getElementById('Seizures or convulsions')).is(':checked'));
        expect((document.getElementById('Loss of consciousness')).is(':checked'));
        expect((document.getElementById('Deterioriating conscious state')).is(':checked'));
        expect((document.getElementById('Increasing restlessness')).is(':checked'));
        expect((document.getElementById('Agitation or combativeness')).is(':checked'));
    });
  });