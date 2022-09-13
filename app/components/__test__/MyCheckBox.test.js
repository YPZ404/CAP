import React from 'react'
import renderer from 'react-test-renderer';
import MyCheckbox from '../MyCheckbox';


describe("<MyCheckbox />", () => {
    it("contains checkmark when checked", () => {
        const tree = renderer.create(<MyCheckbox onUpdate={() => {}}></MyCheckbox>).toJSON();
        expect(tree.children[0]).toBe('checkmark');
    });
});