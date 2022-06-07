<template>
  <div class="container mt-5 mb-5">
    <h3>Aclaraciones</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tipo</th>
          <th scope="col">Folio</th>
          <th scope="col">Empleado</th>
          <th scope="col">Fecha alta</th>
          <th scope="col">Detalles</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(aclaration, i) in aclarations" :key="i">
          <th scope="row">{{ aclaration.id }}</th>
          <td>
            {{ types.find(type => type.id === aclaration.tipo_id).descripcion }}
          </td>
          <td>{{ aclaration.folio }}</td>
          <!-- <td>{{ aclaration.empleado_id }}</td> -->
          <td>
            {{ employes.find(emp => emp.id === aclaration.empleado_id).nombre }}
          </td>
          <td>{{ aclaration.fecha_alta }}</td>
          <td>{{ aclaration.detalles }}</td>
          <td>
            <span class="btn-success">
              <div v-show="aclaration.status_id === 1" class="bg-secondary text-white text-center fw-semibold px-2">
                {{ status.find(sta => sta.id === aclaration.status_id).descripcion }}
              </div>
              <div v-show="aclaration.status_id === 2" class="bg-success text-white text-center fw-semibold px-2">
                {{ status.find(sta => sta.id === aclaration.status_id).descripcion }}
              </div>
              <div v-show="aclaration.status_id === 3" class="bg-danger text-white text-center fw-semibold px-2">
                {{ status.find(sta => sta.id === aclaration.status_id).descripcion }}
              </div>
              <div v-show="aclaration.status_id === 4" class="bg-dark text-white text-center fw-semibold px-2">
                {{ status.find(sta => sta.id === aclaration.status_id).descripcion }}
              </div>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { userStore } from "../../stores/UserStore";
import { typeStore } from "../../stores/TypeStore";
import { aclarationStore } from "../../stores/AclarationStore";
import { statusStore } from "../../stores/StatusStore";
import { employeStore } from "../../stores/EmployeStore";

export default {
  setup() {
    const userData = userStore();
    const typeData = typeStore();
    const aclarationData = aclarationStore();
    const statusData = statusStore();
    const employeData = employeStore();

    return {
      userData,
      typeData,
      aclarationData,
      statusData,
      employeData
    };
  },
  data() {
    return {

    };
  },
  methods: {},
  computed: {
    types() {
      return this.typeData.getListTypes;
    },
    aclarations() {
      return this.aclarationData.getListAclarations;
    },
    status() {
      return this.statusData.getListStatus;
    },
    employes() {
      return this.employeData.getListEmployes;
    },
  }
};
</script>

<style scoped>
.text-white {
  color: white
}
</style>