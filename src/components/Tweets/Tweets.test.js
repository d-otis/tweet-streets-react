import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Tweets from "./Tweets";

const queryClient = new QueryClient();

describe("Tweets component", () => {
  const setup = () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Tweets />
      </QueryClientProvider>
    );
  };

  test("renders header", async () => {
    setup();

    const header = await screen.findByText(/saved trash tweets/i);
    expect(header).toBeInTheDocument();
  });

  test("renders an HTML table", () => {
    setup();

    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  describe("renders list of tweets", () => {
    test("renders tweet content", () => {
      setup();

      const content = screen.getByText(/no trash pick-up today/i);
      expect(content).toBeInTheDocument();
    });

    test("renders timestamp", () => {
      setup();

      const timestamp = screen.getByText(/february 26, 2022/i);
      expect(timestamp).toBeInTheDocument();
    });
  });
});
