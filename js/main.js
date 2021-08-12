//import {crearPokemon} from 'crearPokemon.js';

const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");
let ids = 0;
let idpokdivs = 0

window.addEventListener('scroll', ()=>{

    if(window.scroll(0,0)){
        document.getElementById("arrow").style.transition = '1s ease-in-out';
        document.getElementById("arrow").style.opacity = '1';
        document.getElementById("arrow").style.display = 'inherit';
        document.getElementById("arrow2").style.transition = '1s ease-in-out';
        document.getElementById("arrow2").style.opacity = '1';
        document.getElementById("arrow2").style.display = 'inherit';
        document.getElementById("pokeball").style.transition = '1s ease-in-out';
        document.getElementById("pokeball").style.opacity = '1';
        document.getElementById("pokeball").style.display = 'inherit';
        document.getElementById("scrolldown").style.transition = '1s ease-in-out';
    document.getElementById("scrolldown").style.opacity = '0';
    document.getElementById("scrolldown").style.display = 'none';
        document.getElementById("main").style.transition = '1s ease-in-out';
        document.getElementById("main").style.height = '100vh';
    }
    document.getElementById("arrow").style.transition = '1s ease-in-out';
    document.getElementById("arrow").style.opacity = '0';
    document.getElementById("arrow").style.display = 'none';
    document.getElementById("arrow2").style.transition = '1s ease-in-out';
    document.getElementById("arrow2").style.opacity = '0';
    document.getElementById("arrow2").style.display = 'none';
    document.getElementById("pokeball").style.transition = '1s ease-in-out';
    document.getElementById("pokeball").style.opacity = '0';
    document.getElementById("pokeball").style.display = 'none';
    document.getElementById("scrolldown").style.transition = '1s ease-in-out';
    document.getElementById("scrolldown").style.opacity = '0';
    document.getElementById("scrolldown").style.display = 'none';
    
    document.getElementById("main").style.transition = '1s ease-in-out';
    document.getElementById("main").style.height = '5vh';
})

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName == "ArrowUp"){
        document.getElementById("arrow").style.transition = '1s ease-in-out';
        document.getElementById("arrow").style.opacity = '1';
        document.getElementById("arrow").style.display = 'inherit';
        document.getElementById("arrow2").style.transition = '1s ease-in-out';
        document.getElementById("arrow2").style.opacity = '1';
        document.getElementById("arrow2").style.display = 'inherit';
        document.getElementById("pokeball").style.transition = '1s ease-in-out';
        document.getElementById("pokeball").style.opacity = '1';
        document.getElementById("pokeball").style.display = 'inherit';
        document.getElementById("main").style.transition = '1s ease-in-out';
    document.getElementById("main").style.height = '100vh';
    }else if(keyName == "w" || keyName == "W"){
        document.getElementById("arrow").style.transition = '1s ease-in-out';
        document.getElementById("arrow").style.opacity = '1';
        document.getElementById("arrow").style.display = 'inherit';
        document.getElementById("arrow2").style.transition = '1s ease-in-out';
        document.getElementById("arrow2").style.opacity = '1';
        document.getElementById("arrow2").style.display = 'inherit';
        document.getElementById("pokeball").style.transition = '1s ease-in-out';
        document.getElementById("pokeball").style.opacity = '1';
        document.getElementById("pokeball").style.display = 'inherit';
        document.getElementById("main").style.transition = '1s ease-in-out';
    document.getElementById("main").style.height = '100vh';
    }
  });


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

const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
}

const crearPokemon = (pokemon) =>{
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const pname = document.createElement('h3');
    pname.textContent = "#" + pokemon.id + " - " + capitalize(pokemon.name);

    /*
        IMAGEN DEL TIPO DE POKEMON

    const imgType = document.createElement('img');
    
    pokemon.types.forEach(element => {

        if(element.type.name == 'electric'){
            const imgType = document.createElement('img');
            imgType.setAttribute("class", "types");
            imgType.src = '../resources/img/flash.png';
            pdivstats.appendChild(imgType);
        }
        
    });

    */
    const pstats = document.createElement('h4');
    
    pstats.textContent = 'Abilities';

    const pability = document.createElement('p');

    const pdivstats = document.createElement('div');
    pdivstats.setAttribute('style', 'flex');
    pdivstats.appendChild(pstats);
    pdivstats.appendChild(pability);

    
    pokemon.abilities.forEach(element => {
        const pability = document.createElement('label');
        pability.setAttribute("class", "abilities");
        pability.textContent = capitalize(element.ability.name);
        pdivstats.appendChild(pability);
    });
    
    
    const div = document.createElement('div');
    div.setAttribute('id', 'div' + idpokdivs)
    idpokdivs++;
    div.appendChild(pname);
    div.appendChild(img);
    const pbasestats = document.createElement('h4');
    
    pbasestats.textContent = 'Base Stats';
    
    pdivstats.appendChild(pbasestats);

    div.appendChild(pdivstats);

    //BASE STATS DIVS
    const base_stats_maindiv = document.createElement('div');
    base_stats_maindiv.setAttribute("class", "base_stats_maindiv");
    const base_stats_divcol1 = document.createElement('div');
    const base_stats_divcol2 = document.createElement('div');

    //BASE STATS DATA

    const base_stats_hp = document.createElement('p');
    base_stats_hp.setAttribute("class", "base_stats_HP");
    base_stats_hp.textContent = pokemon.stats[0].stat.name.toUpperCase() + ": " + pokemon.stats[0].base_stat;
    base_stats_divcol1.appendChild(base_stats_hp);

    const base_stats_attack = document.createElement('p');
    base_stats_attack.setAttribute("class", "base_stats_ATTACK");
    base_stats_attack.textContent = pokemon.stats[1].stat.name.toUpperCase() + ": " + pokemon.stats[1].base_stat;
    base_stats_divcol2.appendChild(base_stats_attack);

    const base_stats_defense = document.createElement('p');
    base_stats_defense.setAttribute("class", "base_stats_DEFENSE");
    base_stats_defense.textContent = pokemon.stats[2].stat.name.toUpperCase() + ": " + pokemon.stats[2].base_stat;
    base_stats_divcol1.appendChild(base_stats_defense);

    const base_stats_s_attack = document.createElement('p');
    base_stats_s_attack.setAttribute("class", "base_stats_S_ATTACK");
    base_stats_s_attack.textContent = pokemon.stats[3].stat.name.toUpperCase() + ": " + pokemon.stats[3].base_stat;
    base_stats_divcol2.appendChild(base_stats_s_attack);

    const base_stats_speed = document.createElement('p');
    base_stats_speed.setAttribute("class", "base_stats_SPEED");
    base_stats_speed.textContent = pokemon.stats[5].stat.name.toUpperCase() + ": " + pokemon.stats[5].base_stat;
    base_stats_divcol1.appendChild(base_stats_speed);

    const base_stats_s_defense = document.createElement('p');
    base_stats_s_defense.setAttribute("class", "base_stats_S_DEFENSE");
    base_stats_s_defense.textContent = pokemon.stats[4].stat.name.toUpperCase() + ": " + pokemon.stats[4].base_stat;
    base_stats_divcol2.appendChild(base_stats_s_defense);

    const base_stats_base_experience = document.createElement('p');
    base_stats_base_experience.setAttribute("class", "base_stats_base_experience");
    base_stats_base_experience.textContent = "BASE EXPERIENCE: " + pokemon.base_experience;

/*
    const base_stats_defense = document.createElement('p');
    base_stats_defense.setAttribute("class", "base_stats_HP");
    base_stats_defense.textContent = pokemon.stats[2].stat.name.toUpperCase();
    base_stats_divcol1.appendChild(base_stats_defense);
   */

    //APPEND BASE STATS DIVS TO POKEMON'S DIVS

    base_stats_maindiv.appendChild(base_stats_divcol1);
    base_stats_maindiv.appendChild(base_stats_divcol2);

    pdivstats.appendChild(base_stats_maindiv);
    pdivstats.appendChild(base_stats_base_experience);

    crearBotonModal(pokemon, pokemon.id, div)
    //APPEND THE MAIN DIV
    pokemonContainer.appendChild(div);
}


const crearBotonModal = (pokemon, id, div) =>{
    
    const location = pokemon.location_area_encounters; 
    let btnLocations = document.createElement('input');
    btnLocations.setAttribute('type', 'button');
    btnLocations.setAttribute('value', 'LOCATIONS')
    btnLocations.setAttribute('class', 'btnLocations')
    btnLocations.setAttribute('data-bs-toggle', 'modal')
    btnLocations.setAttribute('data-bs-target', '#LocationModal')
    btnLocations.setAttribute('onclick', `Locations("${location}")`)
    div.appendChild(btnLocations);
}

const Locations = (location) =>{
    const img_location = document.querySelector('#img-locations');
    fetch(location)
        .then(resp => resp.json())
        .then(data => SetLocations(data))
        .catch(error => swal("Error", 'error: '+error, "error"))
}

const SetLocations = (locations) => {
    const locationModal = document.querySelector('#modal-body');
    
    if(document.querySelector('.locationdiv')){
        document.querySelectorAll('.locationdiv').forEach(element => {
            element.remove();
        });
        locations.forEach(element => {
            const locationdiv = document.createElement('div');
            locationdiv.setAttribute('class', 'locationdiv');

            const locationName = document.createElement('label');
            locationName.textContent = capitalize(element.location_area.name);
            const locationMethod = document.createElement('label');
            locationMethod.textContent = 'Method: ' + capitalize(element.version_details[0].encounter_details[0].method.name);
    
            const locationDivisor = document.createElement('hr');
    
            locationdiv.appendChild(locationName);
            locationdiv.appendChild(locationMethod);
            locationdiv.appendChild(locationDivisor);
    
            locationModal.appendChild(locationdiv);
            
        });
    }else{
        locations.forEach(element => {

            
                const locationdiv = document.createElement('div');
                locationdiv.setAttribute('class', 'locationdiv');
        
                const locationName = document.createElement('label');

                const locationnametemp = element.location_area.name;
                
                locationName.textContent = capitalize(element.location_area.name);
                const locationMethod = document.createElement('label');
                locationMethod.textContent = 'Method: ' + capitalize(element.version_details[0].encounter_details[0].method.name);
        
                const locationDivisor = document.createElement('hr');
        
                locationdiv.appendChild(locationName);
                locationdiv.appendChild(locationMethod);
                locationdiv.appendChild(locationDivisor);
        
                locationModal.appendChild(locationdiv);
                
                
        });
    }
    
    
}
