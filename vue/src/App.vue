<template>
  <div id="app">
    <header>
      <h1>Pok&eacute;dex</h1>
      <div id="nav">
        <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'pokedex' }">Pokedex</router-link>&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link>
    </div>
    </header>
    
    <main>
      <router-view />
    </main>
    
    <footer>
      Copyright &copy; 2023 Jeffrey Bee
    </footer>
  </div>
</template>

<script>

</script>

<style>
body {
  background-color: #eeeeee;
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  margin: 0px;
}

div#app {
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas: "header"
                      "main"
                      "footer";
  align-items: stretch;
}

header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: gray;
  color: white;
}

header h1 {
  margin: 2px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, .3);
}

header a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav {
  margin-right: 5px;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.tab {
  border: none;
  background-color: darkgray;
  color: white;
  padding: 5px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  min-width: 100px;
  margin-left: 2px;
  margin-right: 2px;
  font-weight: bold;
}

.tab:hover {
  cursor: pointer;
  background-color: #dddddd;
  color: #333;
}

.tab.selected {
  background-color: white;
  color: #333;
  border-top: 1px solid darkgray;
  border-right: 1px solid darkgray;
  border-left: 1px solid darkgray;
}

.undertabs {
  height: 30px;
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}
</style>