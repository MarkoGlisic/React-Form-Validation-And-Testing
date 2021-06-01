import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormList from "../FormList.js";
import Form from "react-bootstrap";

describe("<FormList/>", () => {
  // Email Input Tests
  test("renders email input", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  test("pass a valid email to email input field", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@test.com");
    expect(screen.getByTestId("email-input")).toHaveValue("test@test.com");
  });

  // Name Input Tests
  test("renders name input", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("name-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("pass a valid name to name input field", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("name-input");
    userEvent.type(inputEl, "John");
    expect(screen.getByTestId("name-input")).toHaveValue("John");
  });

  // Age Input Tests
  test("renders name input", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("age-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("pass a valid age to age input field", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("age-input");
    userEvent.type(inputEl, "25");
    expect(screen.getByTestId("age-input")).toHaveValue("25");
  });
});
