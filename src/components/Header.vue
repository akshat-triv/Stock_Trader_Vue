<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" tag="div" class="navbar-brand"
          >Stock Traders
        </router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" active-class="active" tag="li">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" active-class="active" tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: $10000</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">End Day</a></li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Save Data</a></li>
              <li><a href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>
