import { defineStore } from "pinia";

export const userStore = defineStore("UserStore", {
  state: () => ({
    user: {
      id: 1,
      cuenta: "043343",
      nombre: "Juan Carlos",
      a_paterno: "Calero",
      a_materno: "Hidalgo",
      rfc: "GGER434f",
      calle_numero: "dfgfgrtgrt",
      colonia: "dfgegre",
      cp: "sdfds",
      delegacion: "fgdg",
      estado: "sdfs",
      ciudad: "sdfs",
      pais: "sdf",
    },
    users: [
      {
        id: 1,
        cuenta: "043343",
        nombre: "Juan Carlos",
        a_paterno: "Calero",
        a_materno: "Hidalgo",
        rfc: "GGER434f",
        calle_numero: "Zona de la Vereda 4343",
        colonia: "Torres",
        cp: "49503",
        delegacion: "Roma",
        estado: "CDMX",
        ciudad: "Lozama",
        pais: "Mexico",
      },
      {
        id: 2,
        cuenta: "433432",
        nombre: "Jorge",
        a_paterno: "Gutierrez",
        a_materno: "Loaiza",
        rfc: "JGLD349F",
        calle_numero: "Calle de la paz 1234",
        colonia: "REvolucion",
        cp: "049003",
        delegacion: "Ixtapalapa",
        estado: "CDMX",
        ciudad: "CDMX",
        pais: "Mexico",
      },
    ],
  }),
  getters: {
    getUser: (state) => state.user,
    getListUsers: (state) => state.users,
  },
  actions: {
    changeName() {
      this.user.name = "Carlos";
    },
  },
});
