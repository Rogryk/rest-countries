import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Element from "./Element";
import "../../../../setupTest";
import { strict } from "assert";

describe("CountryDetail component", () => {
  test("renders all provided info", () => {
    const { container } = render(
      <Element
        flag="dummy.html"
        name="testName"
        population={9999}
        region="testRegion"
        capital="testCapital"
        elementClickHandler={() => {}}
      />
    );

    expect(screen.getByAltText("flag of testName")).toBeInTheDocument;
    expect(screen.getByText("testName")).toBeInTheDocument;
    expect(screen.getByText("9,999")).toBeInTheDocument;
    expect(screen.getByText("testRegion")).toBeInTheDocument;
    expect(screen.getByText("testCapital")).toBeInTheDocument;
  });

  test("executes provided callback function", () => {
    const callbackFunction = jest.fn((arg) => arg);
    const { container } = render(
      <Element
        flag="dummy.html"
        name="testName"
        population={9999}
        region="testRegion"
        capital="testCapital"
        elementClickHandler={callbackFunction}
      />
    );

    expect(container).toBeInTheDocument();
    fireEvent.click(container.firstChild!);
    expect(callbackFunction.mock.results[0].value).toEqual("testName");
  });
});
