async function fetchEmails() {
  const response = await window.fetch("/api/emails");
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  return data.data;
}

export { fetchEmails };
