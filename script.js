//const Pokedex = require("pokeapi-js-wrapper")
const customOptions = {
  protocol: "https",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5s
  cacheImages: true
};
const P = new Pokedex.Pokedex(customOptions);

displayPokedex();

function displayPokedex() {
  P.getPokemonSpeciesList().then(function(response) {
    for(let i = 0; i < response.count; i++) {
      createPokemonCard(i + 1);
    }
  });
}

function createPokemonCard(id) {
  const pokemonCard = document.createElement("div");
  pokemonCard.className = "pokemon_card";
  let dexNumber = getDexNumberText(id);
  const pokedexNumber = document.createElement("div");
  pokedexNumber.className = "pokemon_number";
  pokedexNumber.innerHTML = dexNumber;
  const pokemonName = document.createElement("div");
  pokemonName.className = "pokemon_name";
  const pokemonTypes = document.createElement("div");
  pokemonTypes.className = "pokemon_types";
  const imageContainer = document.createElement("div");
  imageContainer.className = "pokemon_image_container";
  const pokemonInfo = document.createElement("div");
  pokemonInfo.className = "pokemon_info";

  let types = [];
  P.getPokemonSpeciesByName(id).then(function(pkmn) {
    let pkmnName = pkmn.names.find(pkmnName => pkmnName.language.name === "en");
    pokemonName.innerHTML = pkmnName.name;
    const pokemonImage = document.createElement("img");
    pokemonImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";
    pokemonImage.className = "pokemon_image";
    imageContainer.appendChild(pokemonImage);
    let defaultForm = pkmn.varieties.find(defaultForm => defaultForm.is_default === true);
    P.getPokemonByName(defaultForm.pokemon.name).then(function(pkmnForm) {
      for (let i = 0; i < pkmnForm.types.length; i++) {
        types.push(pkmnForm.types[i].type.name);
      }
      if (types.length === 1) {
        pokemonCard.style.backgroundColor = getTypeColor(types[0]);
      } else {
        pokemonCard.style.backgroundImage = "linear-gradient(to right, " + getTypeColor(types[0]) + ", " + getTypeColor(types[1]) + ")";
      }
      for (let i = 0; i < types.length; i++) {
        const pokemonType = document.createElement("div");
        const pokemonTypeIcon = document.createElement("img");
        pokemonTypeIcon.className = "type_icon";
        pokemonTypeIcon.src = "images/type_icons/" + types[i] + ".png";
        pokemonType.appendChild(pokemonTypeIcon);
        pokemonTypes.appendChild(pokemonType);
      }
    });
  });

  pokemonCard.appendChild(pokedexNumber);
  pokemonCard.appendChild(imageContainer);
  pokemonInfo.appendChild(pokemonName);
  pokemonInfo.appendChild(pokemonTypes);
  pokemonCard.appendChild(pokemonInfo);

  document.getElementById("pokedex").appendChild(pokemonCard);
  
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