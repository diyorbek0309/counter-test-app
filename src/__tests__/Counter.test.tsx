import Counter from "../components/Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("This suit is to test the Counter component", () => {
  test("Snapshot of Counter", () => {
    const { asFragment } = render(<Counter title="hello world" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders hello world title", () => {
    render(<Counter title="hello world" />);
    const title = screen.getByText(/hello world/i);
    expect(title).toBeInTheDocument();
  });

  test("finding title with TestId", () => {
    render(<Counter title="hello world" />);
    const title = screen.getByTestId("header");
    expect(title).toHaveTextContent(/hello world/i);
  });

  test("check counter initial value", () => {
    render(<Counter title="hello world" />);
    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent("0");
  });

  test("check counter value after a click", () => {
    render(<Counter title="hello world" />);
    const button = screen.getByTestId("button");
    const counter = screen.getByTestId("counter");
    userEvent.click(button);
    expect(counter).toHaveTextContent("1");
  });
});
