import { rest } from "msw";

const tweets = [
  {
    id: 1,
    timestamp: "February 26, 2022",
    content:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  },
  {
    id: 2,
    timestamp: "January 26, 2022",
    content: "No trash pick-up today in celebration of Dan's birthday",
  },
  {
    id: 3,
    timestamp: "July 19, 2022",
    content: "No trash today in celebration of Danny's birthday",
  },
];

const emails = ["dan@example.com", "dude@example.com", "lilybear@example.com"];

const tweetsHandlers = [
  rest.get("/api/tweets", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: tweets }));
  }),
];

const emailHandlers = [
  rest.get("/api/emails", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: emails }));
  }),
];

export const handlers = [...tweetsHandlers, ...emailHandlers];
