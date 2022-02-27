import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  };

  test("renders in a header element", () => {
    setup();

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  test("renders in a nav element", () => {
    setup();

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  test("renders Tweets link", () => {
    setup();

    const tweetsLink = screen.getByText(/tweets/i);
    expect(tweetsLink).toBeInTheDocument();
  });

  test("renders Emails link", () => {
    setup();

    const emailsLink = screen.getByText(/emails/i);
    expect(emailsLink).toBeInTheDocument();
  });

  test("renders Home Link", () => {
    setup();

    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
  });
});
