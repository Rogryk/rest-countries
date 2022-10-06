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
  },
  {
    flag: "dummy2.html",
    name: "testName2",
    population: 99992,
    region: "testRegion2",
    capital: "testCapital2",
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
    expect(contentElement1).toBeInTheDocument();
    expect(contentElement2).toBeInTheDocument();
  });
});
