import { render, screen } from "@testing-library/react";
import Tweets from "./Tweets";

describe("Tweets component", () => {
  test("renders header", () => {
    render(<Tweets />);

    const header = screen.getByText(/saved trash tweets/i);
    expect(header).toBeInTheDocument();
  });

  test("renders an HTML table", () => {
    render(<Tweets />);

    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  describe("renders list of tweets", () => {
    test("renders tweet content", () => {
      render(<Tweets />);

      const content = screen.getByText(/no trash pick-up today/i);
      expect(content).toBeInTheDocument();
    });

    test("renders timestamp", () => {
      render(<Tweets />);

      const timestamp = screen.getByText(/february 26, 2022/i);
      expect(timestamp).toBeInTheDocument();
    });
  });
});
