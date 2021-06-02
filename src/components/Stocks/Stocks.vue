<template>
  <div>
    <app-stock
      v-for="(stock, Idx) in stocks"
      :key="`stock${Idx}`"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  name: 'Portfolio',
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    },
  },
};
</script>
