<template>
  <div id="app">
    <Header></Header>
    <ProductList></ProductList>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ProductList from './components/ProductList.vue';

export default {
  name: 'app',
  components: {
    Header,
    ProductList,
  },
};
</script>

<style>
</style>
