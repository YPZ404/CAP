import React from 'react'
import MyCheckbox from '../MyCheckbox';
import {fireEvent, render, screen} from "@testing-library/react-native";

describe("<MyCheckbox />", () => {

    it("is unchecked by default", () => {
        render(<MyCheckbox />);
        expect(screen.queryByTestId("checkmark")).toBeNull();
    });

});