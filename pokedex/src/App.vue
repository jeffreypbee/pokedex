<template>
  <div id="app">
    <header>
      <h1>POK&eacute;DEX</h1>
      <a href="">☰</a>
    </header>
    <div id="menus">
      <div id="menus-container" v-if="displayMenus">
      <div id="filter-menu">
        <h2>Filter</h2>
        <div id="filter-name">
          <input type="number" placeholder="Number" min="1" v-model="filters.number" />
          <input type="text" placeholder="Name" v-model="filters.name" />
        </div>
        <div id="filter-generation">
        <h3>Generation</h3>
        <p>
          <button @click="resetGenerationFilter()" id="all-generations-button" :class="{selected : filters.generations.length < 1}">All</button>
          <button v-for="generation in generations" :key="generation.gen" @click="filterByGeneration(generation)" :class="{selected : filters.generations.includes(generation)}">{{generation.gen}}</button>
        </p>
        </div>
        <div id="filter-type">
        <h3>Type</h3>
        <p>
          <button id="all-types-button" :class="{selected: filters.types.length < 1}" @click="resetTypeFilter">All</button>
          <input type="checkbox" id="filter-types-and" v-model="filters.filterTypeAnd"><label for="filter-types-and">And</label>
        </p>
        <p>
          <img v-for="(type, index) in types" :key="index" :class="{selected : filters.types.includes(type.name)}" @click="filterByType(type.name)" :alt="type.name" :title="type.name" :src="type.icon">
        </p>
        </div>
      </div>
      <div class="view-menu">
        <h2>View</h2>
        <select v-model="view.sprite">
          <option value="official-artwork">Official Artwork</option>
          <option value="home">Pokemon Home</option>
          <option value="showdown">Showdown</option>
          <option value="artwork">My Artwork</option>
        </select>
      </div>
      </div>
      <div class="toggle-menus" @click.prevent="displayMenus = !displayMenus">{{displayMenus ? '^' : 'V'}}</div>
    </div>
    <PokedexView
      class="pokedex-container"
      :pokedex="pokedex"
      :filters="filters"
      :view="view"
    />

    <footer>Copyright &copy; 2023 Jeffrey Bee</footer>
  </div>
</template>

<script>
import PokedexView from "./components/PokedexView.vue";

export default {
  name: "App",
  components: {
    PokedexView,
  },
  data() {
    return {
      displayMenus: false,
      pokedex: [
        {
          name: "Bulbasaur",
          number: 1,
          types: ["grass", "poison"],
        },
        {
          name: "Ivysaur",
          number: 2,
          types: ["grass", "poison"],
        },
        {
          name: "Venusaur",
          number: 3,
          types: ["grass", "poison"],
        },
        {
          name: "Charmander",
          number: 4,
          types: ["fire"],
        },
        {
          name: "Charmeleon",
          number: 5,
          types: ["fire"],
        },
        {
          name: "Charizard",
          number: 6,
          types: ["fire", "flying"],
        },
        {
          name: "Squirtle",
          number: 7,
          types: ["water"],
        },
        {
          name: "Wartortle",
          number: 8,
          types: ["water"],
        },
        {
          name: "Blastoise",
          number: 9,
          types: ["water"],
        },
        {
          name: "Caterpie",
          number: 10,
          types: ["bug"],
        },
        {
          name: "Metapod",
          number: 11,
          types: ["bug"],
        },
        {
          name: "Butterfree",
          number: 12,
          types: ["bug", "flying"],
        },
        {
          name: "Weedle",
          number: 13,
          types: ["bug", "poison"],
        },
        {
          name: "Kakuna",
          number: 14,
          types: ["bug", "poison"],
        },
        {
          name: "Beedrill",
          number: 15,
          types: ["bug", "poison"],
        },
        {
          name: "Pidgey",
          number: 16,
          types: ["normal", "flying"],
        },
        {
          name: "Pidgeotto",
          number: 17,
          types: ["normal", "flying"],
        },
        {
          name: "Pidgeot",
          number: 18,
          types: ["normal", "flying"],
        },
        {
          name: "Rattata",
          number: 19,
          types: ["normal"],
        },
        {
          name: 'Rattata',
          formName: 'Alolan',
          number: 19,
          types: ['dark', 'normal']
        },
        {
          name: "Raticate",
          number: 20,
          types: ["normal"],
        },
        {
          name: 'Raticate',
          formName: 'Alolan',
          number: 20,
          types: ['dark', 'normal']
        },
        {
          name: "Spearow",
          number: 21,
          types: ["normal", "flying"],
        },
        {
          name: "Fearow",
          number: 22,
          types: ["normal", "flying"],
        },
        {
          name: "Ekans",
          number: 23,
          types: ["poison"],
        },
        {
          name: "Arbok",
          number: 24,
          types: ["poison"],
        },
        {
          name: "Pikachu",
          number: 25,
          types: ["electric"],
        },
        {
          name: "Raichu",
          number: 26,
          types: ["electric"],
        },
        {
          name: "Raichu",
          formName: 'Alolan',
          number: 26,
          types: ["electric", 'psychic'],
        },
        {
          name: "Sandshrew",
          number: 27,
          types: ["ground"],
        },
        {
          name: "Sandshrew",
          formName: 'Alolan',
          number: 27,
          types: ["ice", 'steel'],
        },
        {
          name: "Sandslash",
          number: 28,
          types: ["ground"],
        },
        {
          name: "Sandslash",
          formName: 'Alolan',
          number: 28,
          types: ["ice", 'steel'],
        },
        {
          name: "Walking Wake",
          number: 1009,
          types: ["water", "dragon"],
        },
        {
          name: "Iron Leaves",
          number: 1010,
          types: ["grass", "psychic"],
        },
      ],
      generations: [
        {
          gen: 1,
          startsAt: 1,
          endsAt: 151,
        },
        {
          gen: 2,
          startsAt: 152,
          endsAt: 251,
        },
        {
          gen: 3,
          startsAt: 252,
          endsAt: 386,
        },
        {
          gen: 4,
          startsAt: 387,
          endsAt: 493,
        },
        {
          gen: 5,
          startsAt: 494,
          endsAt: 649,
        },
        {
          gen: 6,
          startsAt: 650,
          endsAt: 721,
        },
        {
          gen: 7,
          startsAt: 722,
          endsAt: 809,
        },
        {
          gen: 8,
          startsAt: 810,
          endsAt: 905,
        },
        {
          gen: 9,
          startsAt: 906,
          endsAt: 1010,
        },
      ],
      types: [
        {name:'bug', icon: require("./assets/type_icons/bug.png")}, 
        {name:'dark', icon: require("./assets/type_icons/dark.png")}, 
        {name:'dragon', icon: require("./assets/type_icons/dragon.png")}, 
        {name:'electric', icon: require("./assets/type_icons/electric.png")}, 
        {name:'fairy', icon: require("./assets/type_icons/fairy.png")}, 
        {name:'fighting', icon: require("./assets/type_icons/fighting.png")}, 
        {name:'fire', icon: require("./assets/type_icons/fire.png")}, 
        {name:'flying', icon: require("./assets/type_icons/flying.png")}, 
        {name:'ghost', icon: require("./assets/type_icons/ghost.png")}, 
        {name:'grass', icon: require("./assets/type_icons/grass.png")}, 
        {name:'ground', icon: require("./assets/type_icons/ground.png")}, 
        {name:'ice', icon: require("./assets/type_icons/ice.png")}, 
        {name:'normal', icon: require("./assets/type_icons/normal.png")}, 
        {name:'poison', icon: require("./assets/type_icons/poison.png")}, 
        {name:'psychic', icon: require("./assets/type_icons/psychic.png")}, 
        {name:'rock', icon: require("./assets/type_icons/rock.png")}, 
        {name:'steel', icon: require("./assets/type_icons/steel.png")}, 
        {name:'water', icon: require("./assets/type_icons/water.png")}
      ],
      filters: {
        number: 0,
        name: "",
        generations: [],
        types: [],
        filterTypeAnd: false
      },
      view: {
        sprite: "official-artwork",
      },
      
    };
  },
  computed: {
        
  },
  methods: {
    filterByType(type) {
      if(this.filters.types.includes(type)) {
        this.filters.types.splice(this.filters.types.indexOf(type), 1);
      } else {
        this.filters.types.push(type);
      }
    },
    filterByGeneration(generation) {
      if(this.filters.generations.includes(generation)) {
        this.filters.generations.splice(this.filters.generations.indexOf(generation), 1);
      } else {
        this.filters.generations.push(generation);
      }
    },
    resetTypeFilter() {
      this.filters.types =[];
    },
    resetGenerationFilter() {
      this.filters.generations = [];
    }
  }
};
</script>

<style>
body {
  width: 100%;
  background-color: #eee;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
}
#app {
  background-color: #eee;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr 30px;
  row-gap: 0px;
  grid-template-areas:
    "header"
    "filter"
    "pokedex"
    "footer";
  align-content: stretch;
  justify-content: stretch;
  height: 100vh;
  width: 100%;
}
header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 30px;
  font-weight: bold;
  color: white;
  padding: 5px;
  padding-left: 10px;
  padding-bottom: 0px;
  background-color: red;
  border-bottom: 10px solid white;
  box-shadow: 0px 6px 6px 0px rgba(110, 96, 128, 0.3);
}
header h1 {
  font-size: 1.7rem;
  margin-bottom: 0px;
}
header a {
  font-size: 2rem;
  color: white;
  text-decoration: none;
}
#menus {
  margin-top: 0px;
  grid-area: filter;
  width: 90%;
  display: flex;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0px;
  margin-bottom: 10px;
  justify-self: center;
  box-shadow: 0px 6px 6px 0px rgba(110, 96, 128, 0.3);
}
#menus-container {
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
#menus h2 {
  margin-top: 0px;
  font-size: 1rem;
}
#menus h3 {
  margin: 5px;
}
#menus p {
  margin: 5px;
}
.toggle-menus {
  font-weight: bold;
  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  text-align: center;
  vertical-align: middle;
  color: red;
}
.toggle-menus:hover {
  cursor: pointer;
  background-color: red;
  color: white;
}
#filter-name {
  margin-bottom: 5px;
}

#filter-menu {
  display: flex;
  flex-direction: column;
}
#filter-generation {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #aaa;
}
#filter-type {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #aaa;
}
#filter-type img {
  width: 25px;
  margin: 2px;
  filter: grayscale(100%);
}
#filter-type img.selected {
  filter: grayscale(0%);
}
footer {
  grid-area: footer;
  align-self: end;
  text-align: center;
  height: 30px;
  vertical-align: bottom;
  background-color: #888;
  color: white;
}

button.selected {
  background-color: white;
}
</style>
