import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Page Test Cases", () => {
  test("should load roles on contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load roles on contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should load roles on contact component", () => {
    render(<Contact />);

    const buttonText = screen.getByText("Submit");

    expect(buttonText).toBeInTheDocument();
  });

  test("should load roles on contact component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });

  test("should load roles on contact component", () => {
    render(<Contact />);

    const inputText = screen.getByPlaceholderText("name");

    expect(inputText).toBeInTheDocument();
  });
});
