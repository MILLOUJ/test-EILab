<template>
  <div style="overflow-x:hidden">
  <nav class="menu">
    <router-link to="/" class="link">Таблица</router-link>
    <router-link to="/layout" class="link">Вёрстка</router-link>
  </nav>
</div>
  <router-view/>
</template>

<style lang="scss">
#app {
  text-align: center;
  color: #000000;
}

</style>
