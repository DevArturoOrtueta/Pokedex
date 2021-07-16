const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

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

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);
}