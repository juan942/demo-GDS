<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container login-container d-flex justify-content-center">
    <div class="col-md-6 login-form">
      <section class="text-center">
        <h3 class="text-accent ahead">Por favor identificate</h3>
        <h5 class="text-white">EMPLEADO</h5>
      </section>
      <div
        v-if="errors.length"
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
        </ul>
        <button
          type="button"
          class="btn-close"
          @click="resetErrors"
        ></button>
      </div>
      <form @submit="checkForm">
        <div class="mb-3">
          <label for="email" class="form-label text-white">
            Usuario:
          </label>
          <input
            name="user"
            type="text"
            class="form-control"
            id="user"
            placeholder="usuario"
            v-model="user"
          />
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label text-white"> Contraseña:</label>
          <input
            name="pwd"
            type="password"
            class="form-control"
            id="pwd"
            placeholder="********"
            v-model="pwd"
          />
        </div>
        <div class="input-group mb-3">
          <input type="submit" class="btnSubmit" value="Login" />
        </div>
        <div class="input-group mb-3">
          <label>
            ¿Eres un cliente? <RouterLink class="btnGhost" to="/loginU"> Ingresa aqui</RouterLink>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      pwd: null,
      user: null,
    };
  },
  methods: {
    checkForm: function (e) {

      e.preventDefault();
    },
    resetErrors: function () {
      this.errors = []
    }
  },
};
</script>

<style scoped>
form {
  color: #ffff;
}
.ahead {
  font-weight: 700;
  font-size: 30px;
}

.text-accent {
  color: #ffb74d;
}

.text-white {
  color: white;
  font-weight: 500;
}

.login-container {
  margin-top: 5%;
  margin-bottom: 5%;
}
.login-form {
  padding: 5%;
  background: #616161;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.3rem;
}
.login-form h3 {
  text-align: center;
}
.login-container form {
  padding: 10%;
}
.btnSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  cursor: pointer;
}
.btnGhost{
  background-color: transparent;
  border: none;
  color: #ffb74d;
}
.login-form .btnSubmit {
  font-weight: 600;
  color: #ffff;
  background-color: #ffb74d;
}
</style>
