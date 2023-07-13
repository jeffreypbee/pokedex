// define(function (require) {
//   const Pokedex = require("pokeapi-js-wrapper");
// });


const customOptions = {
  versionPath: "/api/v2/",
  cache: true,
  cacheImages: true
};
const P = new Pokedex.Pokedex(customOptions);
const pokemonList = [];
const pokedexDiv = document.getElementById("pokedex");
const generations = [
  {
    gen: 1,
    startsAt: 1,
    endsAt: 151
  },
  {
    gen: 2,
    startsAt: 152,
    endsAt: 251
  },
  {
    gen: 3,
    startsAt: 252,
    endsAt: 386
  },
  {
    gen: 4,
    startsAt: 387,
    endsAt: 493
  },
  {
    gen: 5,
    startsAt: 494,
    endsAt: 649
  },
  {
    gen: 6,
    startsAt: 650,
    endsAt: 721
  },
  {
    gen: 7,
    startsAt: 722,
    endsAt: 809
  },
  {
    gen: 8,
    startsAt: 810,
    endsAt: 905
  },
  {
    gen: 9,
    startsAt: 906,
    endsAt: 1010
  }
];


loadPokedexData();

function loadPokedexData() {
  P.getPokemonSpeciesList().then((response) => {
    return response;
  }).then((response) => {
    for(let i = 0; i < response.count; i++) {
      loadPokemonData(i + 1).then((pkmn) => {
        pokemonList.push(pkmn);
        return pkmn;
      });
    }
    return response;
  }).then((response) => {
    displayPokedex(pokemonList);
    return response;
  });
}

async function loadPokemonData(id) {
  const pkmn = {
    id: id,
    name: '',
    formName: '',
    types: []
  };  
  
  P.getPokemonSpeciesByName(id).then((result) => {
    const nameObj = result.names.find(pkmnName => pkmnName.language.name === "en");
    pkmn.name = nameObj.name;
    const form = result.varieties.find(form => form.is_default === true);   
  }).then((result) => {
    P.getPokemonFormByName(id).then((result) => {
      const formObj = result.form_names.find(formName => formName.language.name === "en");
      if (formObj) {
        pkmn.formName = formObj.name;
      }      
      return result;
    });
    return result;
  }).then((result) => {
    P.getPokemonByName(id).then((result) => {
      for (type of result.types) {
        pkmn.types.push(type.type.name);
      }
      return result;
    });
    return result;
  });
  
  return pkmn;
}

function displayPokedex(dex) {
  dex.forEach((pkmn) => {
    console.log(pkmn);
    createPokemonCard(pkmn);
  });
}

function createPokemonCard(pkmn) {
  const pokemonCard = document.createElement("div");
  pokemonCard.className = "pokemon_card";
  const dexNumber = getDexNumberText(pkmn.id);
  const pokedexNumber = document.createElement("div");
  pokedexNumber.className = "pokemon_number";
  pokedexNumber.innerHTML = dexNumber;
  const pokemonName = document.createElement("div");
  pokemonName.className = "pokemon_name";
  pokemonName.innerHTML = pkmn.name;
  const pokemonImage = document.createElement("img");
  pokemonImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pkmn.id + ".png";
  pokemonImage.className = "pokemon_image";
  const imageContainer = document.createElement("div");
  imageContainer.className = "pokemon_image_container";
  imageContainer.appendChild(pokemonImage);
  const pokemonTypes = document.createElement("div");
  pokemonTypes.className = "pokemon_types";
  
  const pokemonInfo = document.createElement("div");
  pokemonInfo.className = "pokemon_info";
  if (pkmn.formName) {
    const pokemonForm = document.createElement("div");
    pokemonForm.innerHTML = pkmn.formName;
    pokemonForm.className = "form_name";
    pokemonInfo.appendChild(pokemonForm);
  }
  if (pkmn.types.length === 1) {
    pokemonCard.style.backgroundColor = getTypeColor(pkmn.types[0]);
  } else {
    pokemonCard.style.backgroundImage = "linear-gradient(to right, " + getTypeColor(pkmn.types[0]) + ", " + getTypeColor(pkmn.types[1]) + ")";
  }
  for (let i = 0; i < pkmn.types.length; i++) {
    const pokemonType = document.createElement("div");
    const pokemonTypeIcon = document.createElement("img");
    pokemonTypeIcon.className = "type_icon";
    pokemonTypeIcon.src = "images/type_icons/" + pkmn.types[i] + ".png";
    pokemonTypeIcon.alt = pkmn.types[i];
    pokemonType.appendChild(pokemonTypeIcon);
    pokemonTypes.appendChild(pokemonType);
  }

  pokemonCard.appendChild(pokedexNumber);
  pokemonCard.appendChild(imageContainer);
  pokemonInfo.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonInfo);
  pokemonCard.appendChild(pokemonTypes);

  pokedexDiv.appendChild(pokemonCard);
  
}

function refreshPokedex() {
  clearPokedex();
  displayPokedex(pokemonList);
}

function filterByGeneration(genNumber) {
  const gen = generations.find(generation => generation.gen == genNumber);
  const filteredList = pokemonList.filter((pkmn) => {
    if (pkmn.id >= gen.startsAt && pkmn.id <= gen.endsAt) {
      return true;
    }
  });
  clearPokedex();
  displayPokedex(filteredList);
}

function clearPokedex() {
  while (pokedexDiv.firstChild) {
    pokedexDiv.removeChild(pokedexDiv.lastChild);
  }
}

function toggleFilterMenu() {
  filterMenu = document.getElementById('filter_menu');
  toggleButton = document.getElementById('toggle_filter_menu_button');
  filterMenu.classList.toggle('collapse');
}

function getDexNumberText(id) {
  if (id < 10) {
    return "000" + id;
  } else if (id < 100) {
    return "00" + id;
  } else if (id < 1000) {
    return "0" + id;
  }
  return id;
}

function getTypeColor(type) {
  switch (type) {
    case "normal": return "#A0A29F";
    case "bug": return "#92BC2C";
    case "dark": return "#595761";
    case "dragon": return "#0C69C8";
    case "electric": return "#F2D94E";
    case "fire": return "#FBA54C";
    case "fairy": return "#EE90E6";
    case "fighting": return "#D3425F";
    case "flying": return "#A1BBEC";
    case "ghost": return "#5F6DBC";
    case "grass": return "#5FBD58";
    case "ground": return "#DA7C4D";
    case "ice": return "#75D0C1";
    case "poison": return "#B763CF";
    case "psychic": return "#FA8581";
    case "rock": return "#C9BB8A";
    case "steel": return "#5695A3";
    case "water": return "#539DDF";
    default: return "#ffffff";
  }
}