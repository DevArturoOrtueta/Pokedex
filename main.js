const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");
let ids = 0;

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerPokemon(input.value.toLowerCase());
});


const traerPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(res => res.json())
    .then(data => {
        crearPokemon(data);
    })
    .catch(error => swal("Error", "Pokemon no encontrado, revisa el nombre introducido...", "error"))
}


const crearPokemon = (pokemon) => {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const pname = document.createElement('h3');
    pname.textContent = pokemon.name;

    const pstats = document.createElement('h4');
    pstats.textContent = 'Stats';

    const pdivstats = document.createElement('div');
    pdivstats.setAttribute('style', 'flex');

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(pname);
    pdivstats.appendChild(pstats);

    div.appendChild(pdivstats);

    pokemonContainer.appendChild(div);
}