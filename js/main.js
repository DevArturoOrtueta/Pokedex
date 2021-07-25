//import {crearPokemon} from 'crearPokemon.js';

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

const crearPokemon = (pokemon) =>{
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const pname = document.createElement('h3');
    pname.textContent = pokemon.name;

    
    const pstats = document.createElement('h4');
    
    pstats.textContent = 'Ability';

    const pability = document.createElement('p');

    const pdivstats = document.createElement('div');
    pdivstats.setAttribute('style', 'flex');
    pdivstats.appendChild(pstats);
    pdivstats.appendChild(pability);

    pokemon.abilities.forEach(element => {
        const pability = document.createElement('label');
        pability.setAttribute("class", "abilities");
        pability.textContent = element.ability.name;
        pdivstats.appendChild(pability);
    });
    
    
    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(pname);
    

    div.appendChild(pdivstats);

    pokemonContainer.appendChild(div);
}
