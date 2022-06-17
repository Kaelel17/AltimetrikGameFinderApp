const loadGames =
  "https://api.rawg.io/docs/#operation/games_read_key=323d24e77c714b23be95168582a653c5";
const coso = document.querySelector("#app");

fetch(`${API_URL}/games`)
  .then((response) => response.json())
  .then((games) => {
    const tlp = games.map((game) => <li>${game.name}</li>);
    coso.innerHTML = `<ul>${tpl}</ul>`;
  });
