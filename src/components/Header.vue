<template>
  <div id="Header">
  <span>購物車內 : {{ totalCount }} 筆商品，共 {{ totalPrice }} 元</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: mapGetters('cart', ['totalCount', 'totalPrice']),
};
</script>

<style scoped>

</style>
