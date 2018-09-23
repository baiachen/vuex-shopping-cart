<template>
  <div id="Header">
  <span>購物車內 : {{ totalCount }} 筆商品，共 {{ totalPrice }} 元</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const computed = mapGetters('cart', ['totalCount', 'totalPrice']);

export default {
  name: 'Header',
  computed,
};
</script>

<style scoped>

</style>
