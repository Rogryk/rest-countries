import React from "react";
import { fireEvent, render, screen, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from "./Filters";
import "../../../setupTest";

describe("Filters component", () => {
  test("takes and displays user input in text input field", () => {
    render(
      <Filters
        regionFilterHandler={(arg) => {}}
        keywordFilterHandler={(arg) => {}}
      />
    );

    const inputField: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: "test text" } });
    const textFieldByValue = screen.getByDisplayValue("test text");

    expect(inputField.value).toEqual("test text");
    expect(textFieldByValue).toBeInTheDocument;
  });

  test("passes proper values to text input filter callback function", () => {
    const mockKeywordFilterHandler = jest.fn((arg) => arg);
    render(
      <Filters
        regionFilterHandler={() => {}}
        keywordFilterHandler={mockKeywordFilterHandler}
      />
    );

    const inputField: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: "test" } });
    fireEvent.change(inputField, { target: { value: "test text" } });

    expect(mockKeywordFilterHandler.mock.results[1].value).toEqual("test");
    expect(mockKeywordFilterHandler.mock.results[2].value).toEqual("test text");
  });

  test("passes proper values to region filter callback function", () => {
    const mockRegionFilterHandler = jest.fn((arg) => arg);

    render(
      <Filters
        regionFilterHandler={mockRegionFilterHandler}
        keywordFilterHandler={() => {}}
      />
    );

    const menuOpenButton = screen.getByRole("button");
    fireEvent.click(menuOpenButton);

    const menuItems = screen.getAllByRole("menuitem");

    const foundMenuItems = menuItems.map((item) => {
      fireEvent.click(item);
      return item.id;
    });

    foundMenuItems.forEach((menuItem, index) => {
      expect(mockRegionFilterHandler.mock.results[index].value).toEqual(
        menuItem
      );
    });
  });
});
