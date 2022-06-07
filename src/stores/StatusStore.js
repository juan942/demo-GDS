import { defineStore } from "pinia";

export const statusStore = defineStore("StatusStore", {
  state: () => ({
    status: {
      id: 1,
      descripcion: "043343",
    },
    statuses: [
      {
        id: 1,
        descripcion: "No atendida",
      },
      {
        id: 2,
        descripcion: "Procede",
      },
      {
        id: 3,
        descripcion: "No procede",
      },
      {
        id: 4,
        descripcion: "Atendida",
      }
    ]
  }),
  getters: {
    getStatus: (state) => state.status,
    getListStatus: (state) => state.statuses
  },
  actions: {
      
  },
});
