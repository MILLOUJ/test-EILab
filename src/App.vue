<template>
  <div style="overflow-x:hidden">
  <nav class="menu">
    <router-link to="/">Таблица</router-link>
    <router-link to="/layout">Вёрстка</router-link>
  </nav>
</div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
