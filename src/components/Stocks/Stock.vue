<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control danger"
            placeholder="Quantity"
            v-model.number="quantity"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stock',
  props: {
    stock: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
