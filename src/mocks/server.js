import { setupServer } from "msw/node";
import { rest } from "msw";
import { handlers } from "./handlers";

// TODO setup fallbackResolver here for error handling which will use imported rest

export const server = setupServer(...handlers);
