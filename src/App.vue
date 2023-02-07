<template>
  <div id="app">
    <Header></Header>
    <Table></Table>
    <RouterView/>
  </div>
</template>

<script>
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Table
  }
}
</script>

<style>

</style>
