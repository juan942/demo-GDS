import { defineStore } from "pinia";

export const aclarationStore = defineStore("AclarationStore", {
  state: () => ({
    aclaration: {
      id: 1,
      tipo_id: "043343",
      usuario_id: "Juan Carlos",
      empleado_id: "Calero",
      monto: "Hidalgo",
      fecha_alta: "GGER434f",
      status_id: "1",
      folio: "4354564543",
      detalles: "sdfds",
    },
    aclarations: [
      {
        id: 1,
        tipo_id: 1,
        usuario_id: 1,
        empleado_id: 1,
        monto: 593.05,
        fecha_alta: "23-04-2022",
        status_id: 1,
        folio: "34652022-001-001",
        detalles: "Detalles de la problematica de la aclaration",
      },
      {
        id: 2,
        tipo_id: 2,
        usuario_id: 2,
        empleado_id: 1,
        monto: 593.05,
        fecha_alta: "23-04-2022",
        status_id: 2,
        folio: "34652022-002-001",
        detalles: "Detalles de la problematica de la aclaration",
      },
      {
        id: 3,
        tipo_id: 2,
        usuario_id: 1,
        empleado_id: 2,
        monto: 593.05,
        fecha_alta: "23-04-2022",
        status_id: 3,
        folio: "34652022-002-002",
        detalles: "Detalles de la problematica de la aclaration",
      },
      {
        id: 4,
        tipo_id: 1,
        usuario_id: 1,
        empleado_id: 1,
        monto: 593.05,
        fecha_alta: "23-04-2022",
        status_id: 4,
        folio: "34652022-001-004",
        detalles: "Detalles de la problematica de la aclaration",
      },
    ],
    userListAclarations: null,
    employeListAclarations: null,
  }),
  getters: {
    getAclaration: (state) => state.aclaration,
    getListAclarations: (state) => state.aclarations,
    getUserList: (state) => state.userListAclarations,
    getEmployeList: (state) => state.employeListAclarations,
  },
  actions: {
    crearAclaracion() {

    }
  },
});
