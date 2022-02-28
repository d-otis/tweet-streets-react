async function fetchTweets() {
  // Shape of Response
  const response = await window.fetch("/api/tweets");
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  return data.data;
}

export { fetchTweets };
