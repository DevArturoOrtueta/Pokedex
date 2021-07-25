
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

export {crearPokemon};