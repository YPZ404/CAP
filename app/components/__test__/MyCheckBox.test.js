import React from 'react'
import MyCheckbox from '../MyCheckbox';
import {fireEvent, render, screen} from "@testing-library/react-native";

describe("<MyCheckbox />", () => {

    it("is unchecked by default", () => {
        render(<MyCheckbox />);
        expect(screen.queryByTestId("checkmark")).toBeNull();
    });

    it("is checked when pressed", () => {
        render(<MyCheckbox />);
        fireEvent.click(screen.getByTestId("checkbox"));
        expect(screen.queryByTestId("checkmark")).not.toBeNull();
    });

    it("is unchecked when pressed twice", () => {
        render(<MyCheckbox />);
        fireEvent.click(screen.getByTestId("checkmark"));
        fireEvent.click(screen.getByTestId("checkmark"));
        expect(screen.queryByTestId("checkmark")).toBeNull();
    });

    it("calls onUpdate when pressed", () => {
        const onUpdate = jest.fn();
        render(<MyCheckbox onUpdate={onUpdate} />);
        expect(onUpdate).toHaveBeenCalledTimes(0);
        fireEvent.click(screen.getByTestId("checkmark"));
        expect(onUpdate).toHaveBeenCalledTimes(1);
    });

    it("has no checkmark when checked is false", () => {
        render(<MyCheckbox checked={false} />);
        expect(screen.queryByTestId("checkmark")).toBeNull();
    });

    it("has a checkmark when checked is true", () => {
        render(<MyCheckbox checked={true} />);
        fireEvent.click(screen.getByTestId("checkmark"));
        expect(screen.queryByTestId("checkmark")).not.toBeNull();
    });

    it("has a transparent background when checked is false", () => {
        render(<MyCheckbox checked={false} />);
        expect(screen.queryByTestId("checkbox").props.style[0].backgroundColor).toBe("transparent");
    });
});