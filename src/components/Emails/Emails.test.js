import { render, screen } from "@testing-library/react";
import Emails from ".";

describe("Emails", () => {
  test("renders an h1", () => {
    render(<Emails />);

    const h1 = screen.getByText(/email subscribers/i);
    expect(h1).toBeInTheDocument();
  });
});
