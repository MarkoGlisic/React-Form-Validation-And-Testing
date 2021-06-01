import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormList from "../FormList.js";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("<FormList/>", () => {
  // Email Input Tests
  it("renders email input", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  it("pass a valid email to email input field", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@test.com");
    expect(screen.getByTestId("email-input")).toHaveValue("test@test.com");
  });

  // Name Input Tests
  it("renders name input", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("name-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  it("pass a valid name to name input field", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("name-input");
    userEvent.type(inputEl, "John");
    expect(screen.getByTestId("name-input")).toHaveValue("John");
  });

  // Age Input Tests
  it("renders name input", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("age-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  it("pass a valid age to age input field", () => {
    render(<FormList />);
    const inputEl = screen.getByTestId("age-input");
    userEvent.type(inputEl, "25");
    expect(screen.getByTestId("age-input")).toHaveValue("25");
  });

  // Snapshots
  it("matches the snapshot", () => {
    const tree = renderer.create(<FormList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
