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

  test("renders an HTML table", async () => {
    setup();

    const table = await screen.findByRole("table");
    expect(table).toBeInTheDocument();
  });

  describe("renders list of tweets", () => {
    test("renders tweet content", async () => {
      setup();

      const content = await screen.findByText(/no trash pick-up today/i);
      expect(content).toBeInTheDocument();
    });

    test("renders timestamp", async () => {
      setup();

      const timestamp = await screen.findByText(/february 26, 2022/i);
      expect(timestamp).toBeInTheDocument();
    });
  });
});
