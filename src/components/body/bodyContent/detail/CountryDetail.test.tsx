import React from "react";
import { fireEvent, render, screen, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryDetail from "./CountryDetail";
import "../../../../../setupTest";

describe("CountryDetail component", () => {
  //   test("passes proper values to callback function", () => {
  test("renders all provided info", () => {
    const callbackFunction = jest.fn((arg) => arg);
    render(
      <CountryDetail
        flag="dummy.html"
        name="testName"
        population={9999}
        region="testRegion"
        capital="testCapital"
        nativeName="testNative"
        subregion="testSubRegion"
        topLevelDomain="testTopLevelDomain"
        currencies={[{ name: "testCurrencies" }, { name: "testCurrencies" }]}
        languages={[{ name: "testLanguages" }]}
        borderCountries={["testBorderCountries1", "testBorderCountries2"]}
        backClickHandler={() => {}}
        countryClickHandler={callbackFunction}
      />
    );

    expect(screen.getByText("testName")).toBeInTheDocument;
    expect(screen.getByText("testRegion")).toBeInTheDocument;
    expect(screen.getByText("testCapital")).toBeInTheDocument;
    expect(screen.getByText("testNative")).toBeInTheDocument;
    expect(screen.getByText("testSubRegion")).toBeInTheDocument;
    expect(screen.getByText("testTopLevelDomain")).toBeInTheDocument;
    expect(screen.getByText("testCurrencies")).toBeInTheDocument;
    expect(screen.getByText("testLanguages")).toBeInTheDocument;
    expect(screen.getByText("testBorderCountries1")).toBeInTheDocument;
    expect(screen.getByText("testBorderCountries2")).toBeInTheDocument;

    // const inputField: HTMLInputElement = screen.getByRole("textbox");
    // fireEvent.change(inputField, { target: { value: "test" } });
    // fireEvent.change(inputField, { target: { value: "test text" } });

    // expect(mockKeywordFilterHandler.mock.results[1].value).toEqual("test");
    // expect(mockKeywordFilterHandler.mock.results[2].value).toEqual("test text");
  });
});
