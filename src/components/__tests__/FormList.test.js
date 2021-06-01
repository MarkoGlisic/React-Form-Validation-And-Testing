import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormList from "../FormList.js";

describe("<FormList/>", () => {
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
});
