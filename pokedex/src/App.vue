<template>
  <div id="app">
    <PageHeader />
    <MenusContainer />
    <PokedexView :pokedex="apiPokedex" />

    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import MenusContainer from './components/MenusContainer.vue';
import PokedexView from "./components/PokedexView.vue";
import PageFooter from './components/PageFooter';

export default {
  name: "App",
  components: {
    PageHeader,
    MenusContainer,
    PokedexView,
    PageFooter
  },
  data() {
    return {
      pokedex: [],
      apiPokedex: []
    };
  },
  computed: {
    
   
  },
  methods: {
  },
  created() {    
    const Pokedex = require("pokeapi-js-wrapper");
    const customOptions = {
      protocol: "https",
      versionPath: "/api/v2/",
      timeout: 100 * 10000,
      cache: true,
      cacheImages: true
    }
    const P = new Pokedex.Pokedex(customOptions);
    P.getPokemonsList().then((response) => {
      return response;      
    }).then((data) => {
      data.results.forEach((pokemonData) => {
        P.getPokemonByName(pokemonData.name).then((pokemon) => {
          this.apiPokedex.push(pokemon);
        });
      });
      return data;
    }).then((response) => {
      this.apiPokedex.sort((a, b) => {
        return a.id - b.id;
      });
      return response;
    });
    
    
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
