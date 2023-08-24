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
  background-color: white;
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
</style>