<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-accent" href="/">GDS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main_nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main_nav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <RouterLink class="nav-link" to="/clarifications"
              >Mis aclaraciones</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/new-clarification"
              >Crear Aclaracion</RouterLink
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              Mi cuenta
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="nav-link text-accent" to="/"
                  >Perfil</RouterLink
                >
              </li>
              <li>
                <RouterLink class="nav-link text-accent" to="/"
                  >Cerrar sesion</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- navbar-collapse.// -->
    </div>
    <!-- container-fluid.// -->
  </nav>
</template>

<script>
import { userStore } from "../stores/UserStore";

export default {
  setup() {
    const user = userStore();

    return {
      user,
    };
  },
  data() {
    return {
        name: this.user
    };
  },
  methods: {},
};
</script>

<style scoped>
.text-white {
  color: white;
}
.text-accent {
  color: #ffb74d;
}
@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }
  .navbar .nav-item:hover .nav-link {
  }
  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }
  .navbar .nav-item .dropdown-menu {
    margin-top: 0;
  }
}
</style>
