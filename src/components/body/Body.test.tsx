import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "./Body";
import "../../../setupTest";

const FETCH_DUMMY = [
  {
    flag: "dummy1.html",
    name: "testName1",
    population: 99991,
    region: "testRegion1",
    capital: "testCapital1",
    nativeName: "testNativeName1",
    subregion: "",
    topLevelDomain: "",
    currencies: [],
    languages: [],
    borderCountries: [],
  },
  {
    flag: "dummy2.html",
    name: "testName2",
    population: 99992,
    region: "testRegion2",
    capital: "testCapital2",
    nativeName: "testNativeName2",
    subregion: "",
    topLevelDomain: "",
    currencies: [],
    languages: [],
    borderCountries: [],
  },
];

describe("Body component", () => {
  test("fetches and renders data", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => FETCH_DUMMY,
    });

    render(<Body />);

    const contentElement1 = await screen.findByText("testName1");
    const contentElement2 = await screen.findByText("testName2");
    const errorMessage = screen.queryByText(
      "Fetching Error. Check your connection."
    );
    expect(contentElement1).toBeInTheDocument();
    expect(contentElement2).toBeInTheDocument();
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("redirects to country detailed view on click", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => FETCH_DUMMY,
    });

    render(<Body />);

    const element = await screen.findByText("testName1");
    fireEvent.click(element);
    const countryDetail = screen.getByText("testNativeName1");
    expect(countryDetail).toBeInTheDocument();
  });

  test("handles fetching error", async () => {
    window.fetch = jest
      .fn()
      .mockResolvedValueOnce(() => Promise.reject("API Error"));

    render(<Body />);

    const errorMessage = await screen.findByText(
      "Fetching Error. Check your connection."
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
