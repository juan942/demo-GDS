<template>
  <div class="container-fluid mt-5 mb-5 d-flex justify-content-center">
    <div class="col-xl-6 col-md-12">
      <div class="card">
        <div class="row">
          <div class="col-12">
            <div class="text-center">
              <div class="m-b-25">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/user.png"
                  class="img-radius"
                  alt="User-Profile-Image"
                />
              </div>
              <h6 class="text-accent fw-semibold fs-5">Hembo Tingor</h6>
              <p class="text-muted fw-normal">Activo</p>
            </div>
          </div>
          <div class="col-12">
            <div class="card-body pa-3">
              <section class="col-12">
                <h6 class="text-accent fw-semibold">Informacion</h6>
              </section>
              <div class="row">
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Cuenta:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.cuenta }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Nombre:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.nombre }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Apellido paterno:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.a_paterno }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Apellido Materno:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.a_materno }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">RFC:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.rfc }}</h6>
                </div>
              </div>
              <section class="col-12">
                <h6 class="text-accent fw-semibold mt-3">Direccion:</h6>
              </section>
              <div class="row">
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Calle y numero:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.calle_numero }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Colonia:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.colonia }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">CP:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.cp }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Delegacion:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.delegacion }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Estado:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.estado }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Ciudad:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.ciudad }}</h6>
                </div>
                <div class="col-sm-6">
                  <p class="m-b-10 fw-semibold">Pais:</p>
                  <h6 class="text-muted f-w-400">{{ user.user.pais }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userStore } from "../../stores/UserStore";

export default {
  setup() {
    const user = userStore();

    return {
      user
    };
  },
  data() {
    return {

    };
  },
  methods: {},
};
</script>


<style scoped>
.text-accent {
  color: #ffb74d;
}

.text-white {
  color: white;
}

.text-dark {
  color: black;
}
</style>
