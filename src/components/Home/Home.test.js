import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  test("renders on page", () => {
    render(<Home />);

    const header = screen.getByText(/home page/i);
    expect(header).toBeInTheDocument();
  });
});
