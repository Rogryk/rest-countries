import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryDetail from "./CountryDetail";
import "../../../../../setupTest";

describe("CountryDetail component", () => {
  test("renders all provided info", () => {
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
        currencies={[{ name: "testCurrencies1" }, { name: "testCurrencies2" }]}
        languages={[{ name: "testLanguages1" }, { name: "testLanguages2" }]}
        borderCountries={["testBorderCountries1", "testBorderCountries2"]}
        backClickHandler={() => {}}
        countryClickHandler={() => {}}
      />
    );

    expect(screen.getByAltText("flag of testName")).toBeInTheDocument;
    expect(screen.getByText("testName")).toBeInTheDocument;
    expect(screen.getByText("9,999")).toBeInTheDocument;
    expect(screen.getByText("testRegion")).toBeInTheDocument;
    expect(screen.getByText("testCapital")).toBeInTheDocument;
    expect(screen.getByText("testNative")).toBeInTheDocument;
    expect(screen.getByText("testSubRegion")).toBeInTheDocument;
    expect(screen.getByText("testTopLevelDomain")).toBeInTheDocument;
    expect(screen.getByText("testCurrencies1")).toBeInTheDocument;
    expect(screen.getByText("testCurrencies2")).toBeInTheDocument;
    expect(screen.getByText("testLanguages1")).toBeInTheDocument;
    expect(screen.getByText("testLanguages2")).toBeInTheDocument;
    expect(screen.getByText("testBorderCountries1")).toBeInTheDocument;
    expect(screen.getByText("testBorderCountries2")).toBeInTheDocument;
  });

  test("passes proper values to callback function", () => {
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
        currencies={[{ name: "testCurrencies1" }, { name: "testCurrencies2" }]}
        languages={[{ name: "testLanguages1" }, { name: "testLanguages2" }]}
        borderCountries={["testBorderCountries1", "testBorderCountries2"]}
        backClickHandler={() => {}}
        countryClickHandler={callbackFunction}
      />
    );

    const testBorderCountry1 = screen.getByText("testBorderCountries1");
    const testBorderCountry2 = screen.getByText("testBorderCountries2");
    fireEvent.click(testBorderCountry1);
    fireEvent.click(testBorderCountry2);
    expect(callbackFunction.mock.results[0].value).toEqual(
      "testBorderCountries1"
    );
    expect(callbackFunction.mock.results[1].value).toEqual(
      "testBorderCountries2"
    );
  });
});
