import { rest } from "msw";

const tweetsHandlers = [
  rest.get("/api/tweets", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: "this was a successful request" })
    );
  }),
];

export const handlers = [...tweetsHandlers];
