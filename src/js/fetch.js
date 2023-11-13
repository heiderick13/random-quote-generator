export let url = "https://api.quotable.io/random";

export async function fetchUrl(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
