export const copyBtn = document.querySelector("#copyBtn");

export function copyQuote() {
  const quote = document.querySelector("#quote");
  navigator.clipboard.writeText(quote.textContent);
  alert("Copied to clipboard!");
}
