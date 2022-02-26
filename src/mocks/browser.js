import { setupWorker, rest } from "msw";
import { handlers } from "./handlers";

const LATENCY_SIM = 2000;

function sleep(delay) {
  return new Promise((resolve) => window.setTimeout(resolve, delay));
}

const latencySimulationMiddleware = ["get", "post", "put", "patch"].map(
  (method) =>
    rest[method]("*", async () => {
      await sleep(LATENCY_SIM);
    })
);

export const worker = setupWorker(...latencySimulationMiddleware, ...handlers);
