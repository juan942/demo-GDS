import { defineStore } from "pinia";

export const employeStore = defineStore("EmployeStore", {
  state: () => ({
    employe: {
      id: 1,
      nombre: "Juan Carlos",
      a_paterno: "Calero",
      a_materno: "Hidalgo",
      usuario: "GGER434f",
      contrasenia: "dfgfgrtgrt",
    },
    employes: [
      {
        id: 1,
        nombre: "Juan Carlos",
        a_paterno: "Calero",
        a_materno: "Hidalgo",
        usuario: "GGER434f",
        contrasenia: "dfgfgrtgrt",
      },
      {
        id: 2,
        nombre: "Andres",
        a_paterno: "Torres",
        a_materno: "Rios",
        usuario: "ADTR232",
        contrasenia: "kfodkmr.fs",
      }
    ],
  }),
  getters: {
    getEmploye: (state) => state.employe,
    getListEmployes: (state) => state.employes,
  },
  actions: {

  },
});
