fetch("https://api.github.com/users/maraliedtafur/repos")
  .then((resp) => resp.json())
  .then((data) => {
    createCards(data);
  })
  .catch((erro) => console.log(erro));

function createCards(projects) {
  let cards = document.getElementById('cards');
  projects.forEach(card => {
    cards.innerHTML += /*hmtl*/
  `
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
      <h4 class="card-title">${card.name}</h4>
        <p class="card-text">
          ${card.description === null ? "Sem descripção" : card.description}
        </p>
      </div>
      <div class="card-footer">
        <a href="${card.html_url}" target="_blank" class="btn btn-dark">Repositorio</a>
      </div>
    </div>
  </div>
  `
  });
}
