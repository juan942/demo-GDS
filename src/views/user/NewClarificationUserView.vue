<template>
  <div class="container mt-5 mb-5">
    <h3>Nueva Aclaracion</h3>
    <section class="col-12 col-md-8 col-md-8 col-lg-8 card px-2 py-3">
      <div
        v-if="errores.length"
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="(error, i) in errores" :key="i">{{ error }}</li>
        </ul>
        <button type="button" class="btn-close" @click="clearErrors"></button>
      </div>
      <form class="row g-3" @submit="submitForm">
        <div class="col-md-6">
          <label for="tipo" class="form-label">Tipo de la aclaracion: </label>
          <select
            name="tipo"
            class="form-select"
            aria-label="Default select example"
            v-model="aclaracion.tipo_id"
            @change="changeFlags"
          >
            <option v-for="(tipo, i) in tipos" :key="i" :value="tipo.id">
              {{ tipo.descripcion }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="fechaC" class="form-label">Fecha de invalidacion de servicio: </label>
          <input
            name="fechaC"
            type="date"
            class="form-control"
            v-model="aclaracion.fecha"
            :disabled="enabled"
          />
        </div>
        <div class="col-md-6">
          <label for="monto" class="form-label">Monto de adeudo: </label>
          <input
            name="monto"
            type="number"
            step="0.01"
            class="form-control"
            v-model="aclaracion.monto"
            :disabled="flag"
          />
        </div>
        <div class="col-12">
          <label for="detalles" class="form-label">Detalles</label>
          <input
            name="detalles"
            type="textArea"
            class="form-control"
            v-model="aclaracion.detalles"
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="submit"
            class="btn btn-dark btn-text-accent"
            value="Crear"
          />
        </div>
      </form>
    </section>
  </div>
</template>

<script>
// import { userStore } from "../../stores/UserStore";
export default {
  // setup() {
  //   const user = userStore();

  //   return {
  //     user
  //   };
  // },
  data() {
    return {
      aclaracion: {
        tipo_id: null,
        monto: null,
        fecha: null,
        detalles: null,
      },
      tipos: [
        {
          id: 1,
          descripcion: "Suspension del servicio por falta de pago",
        },
        {
          id: 2,
          descripcion: "Cobro excesivo del recibo",
        },
      ],
      flag: true,
      enabled: true,
      errores: [],
    };
  },
  computed: {
    // ...mapStores(userStore),
  },
  methods: {
    changed() {
      // this.user.changeName();
    },
    validateForm() {
      if (!this.aclaracion.tipo_id) {
        this.errores.push("Seleccione un tipo de aclaracion");
      }
      if (!this.aclaracion.detalles) {
        this.errores.push("Los detalles de la aclaracion son necesarios");
      }
      if (this.aclaracion.tipo_id === 1) {
        if (!this.aclaracion.fecha) {
          this.errores.push("Ingrese la fecha de suspension del servicio.");
        }
      }
      if (this.aclaracion.tipo_id === 2) {
        if (!this.aclaracion.monto) {
          this.errores.push("Ingrese el monto del recibo.");
        }
      }
      if (this.errores.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    submitForm(e) {
      this.errores = [];
      const check = this.validateForm();
      if (check) {
        // Generar la peticion
        console.log("Peticion lanzada...");
      }
      e.preventDefault();
    },
    clearErrors() {
      this.errores = [];
    },
    changeFlags() {
      if (!this.aclaracion.tipo_id) {
        this.aclaracion.monto = null;
        this.aclaracion.fecha = null
        this.flag = true;
        this.enabled = true;
      } else if (this.aclaracion.tipo_id === 1) {
        this.enabled = false;
        this.flag = true;
        this.aclaracion.monto = null;
      } else {
        this.enabled = true;
        this.flag = false;
        this.aclaracion.fecha = null;
      }
    },
  },
};
</script>

<style scoped>
.btn-text-accent {
  color: #ffb74d;
}
</style>
