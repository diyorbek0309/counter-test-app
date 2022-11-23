import Counter from "../components/Counter";
import { render } from "@testing-library/react";

describe("This suit is to test the Counter component", () => {
  test("Snapshot of Counter", () => {
    const { asFragment } = render(<Counter title="hello world" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
