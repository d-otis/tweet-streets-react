const TWEET_URL =
  process.env.NODE_ENV === "development"
    ? "/api/tweets"
    : process.env.TWEET_URL;

export { TWEET_URL };
