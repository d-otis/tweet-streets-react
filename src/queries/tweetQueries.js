import { TWEET_URL } from "../utils";

async function fetchTweets() {
  // Shape of Response
  const response = await window.fetch(TWEET_URL);
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  return data.data;
}

export { fetchTweets };
