<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "../src/components/TheNavbar.vue";
</script>

<template>
  <header
    v-if="$route.name !== 'loginUsuario' && $route.name !== 'loginEmpleado'"
  >
    <TheNavbar></TheNavbar>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="container-footer pb-0 mb-0 justify-content-center text-light">
      <footer>
        <div class="row my-5 justify-content-center py-5">
          <div class="col-11">
            <div class="row">
              <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h1 class="text-accent">GDS</h1>
                <h3>GAS del Siglo XXI S.A.</h3>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 class="mb-1">
                  <b class="text-white">Menu</b>
                </h6>
                <ul class="list-unstyled">
                  <li>Home</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Portfolio</li>
                </ul>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 class="mb-1">
                  <b class="text-white">Dirección</b>
                </h6>
                <p>Puebla 237, Roma Norte, Cuauhtemoc, CDMX, CP. 06700</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </footer>
</template>

<script>

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".navbar .dropdown")
    .forEach(function (everydropdown) {
      everydropdown.addEventListener("shown.bs.dropdown", function () {
        var el_overlay = document.createElement("span");
        el_overlay.className = "screen-darken";
        document.body.appendChild(el_overlay);
      });

      everydropdown.addEventListener("hide.bs.dropdown", function () {
        document.body.removeChild(document.querySelector(".screen-darken"));
      });
    });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik&display=swap");
body {
  background: linear-gradient(0deg, #fff, 50%, #deeefe);
  font-family: "Rubik", sans-serif;
  background: #455a64;
  height: 100 !important;
}
.text-white {
  color: white;
}
.text-accent {
  color: #ffb74d;
}
.container-footer {
  overflow: hidden;
  margin-top: 1rem;
  background: #262626;
  color: #627482 !important;
  margin-bottom: 0;
  padding-bottom: 0;
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
