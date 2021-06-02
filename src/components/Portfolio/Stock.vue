<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          Tata
          <small>(Price: $1400 | Quantity: 10)</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control danger"
            placeholder="Quantity"
          />
        </div>
        <div class="pull-right">
          <button class="btn btn-success" :disabled="true">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stock',
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
