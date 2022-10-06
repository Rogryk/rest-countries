import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Content from "./Content";
import "../../../../setupTest";

const CONTENT_PROPS = [
  {
    flag: "dummy.html",
    name: "testName",
    population: 9999,
    region: "testRegion",
    capital: "testCapital",
  },
  {
    flag: "dummy2.html",
    name: "testName2",
    population: 99992,
    region: "testRegion2",
    capital: "testCapital2",
  },
];
describe("Content component", () => {
  test("renders elements with passed props", () => {
    render(
      <Content
        content={CONTENT_PROPS}
        elementClickHandler={(arg: string) => {}}
      />
    );

    const contentElement = screen.getByText("testName");
    const contentElement2 = screen.getByText("testName2");
    expect(contentElement).toBeInTheDocument();
    expect(contentElement2).toBeInTheDocument();
  });
});
