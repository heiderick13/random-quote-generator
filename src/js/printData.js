export function printData(data) {
  const output = document.querySelector("#card");

  let card = `<p class="author">${data.author}</p>
    <div class="tags">${data.tags.map((tag) => `<span>${tag}</span>`)}</div>
    <p id="quote">"${data.content}"</p>`;

  output.innerHTML = card;
}
