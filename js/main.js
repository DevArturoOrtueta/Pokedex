import {crearPokemon} from 'crearPokemon.js';

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

