<template>
  <div id="ProductList">
    <table border="1">
      <ProductItem
        v-for="(product, index) in products"
        :product="product"
        :key="index">
      </ProductItem>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductItem from './ProductItem.vue';

const components = {
  ProductItem,
};

const computed = mapState('product', ['products']);

const methods = mapActions('product', ['getProducts']);

const mounted = function() {
  this.getProducts();
};

export default {
  name: 'ProductList',
  components,
  computed,
  methods,
  mounted,
};
</script>

<style scoped>

</style>
