import { fetchUrl, url } from "./fetch.js";
import { printData } from "./printData.js";
import { copyBtn, copyQuote } from "./copyQuote.js";

const randomBtn = document.querySelector("#newQuoteBtn");

async function getData(url) {
  fetchUrl(url)
    .then((data) => printData(data))
    .catch((error) => console.log(error));
}

randomBtn.addEventListener("click", () => {
  getData(url);
});

copyBtn.addEventListener("click", () => {
  copyQuote();
});

getData(url);
