import React from "react";
import { fireEvent, render, screen, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

describe("Button component", () => {
  test("renders with provided text", () => {
    render(<Button onClick={() => {}}>Some text</Button>);

    const button = screen.getByText("Some text");

    expect(button).toBeInTheDocument();
  });

  test("renders with provided class list", () => {
    render(
      <Button onClick={() => {}} class={`class1 class2 class125`}>
        Some text
      </Button>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass("class1");
    expect(button).toHaveClass("class2");
    expect(button).toHaveClass("class125");
  });

  test("executes provided onClick function", () => {
    let clickCount = 0;
    const countUp = () => {
      clickCount++;
    };

    const { container } = render(
      <Button
        onClick={() => {
          countUp();
        }}
      >
        Some text
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(clickCount).toEqual(1);
  });

  test("renders provided icons", () => {
    configure({ testIdAttribute: "data-icon" });
    const iconLeft = <FontAwesomeIcon icon={faArrowLeft} />;
    const iconRight = <FontAwesomeIcon icon={faArrowRight} />;

    render(
      <Button iconLeft={iconLeft} iconRight={iconRight} onClick={() => {}}>
        button
      </Button>
    );

    const buttonByIconLeft = screen.getByTestId("arrow-left");
    const buttonByIconRight = screen.getByTestId("arrow-right");
    expect(buttonByIconLeft).toBeInTheDocument();
    expect(buttonByIconRight).toBeInTheDocument();
  });
});
