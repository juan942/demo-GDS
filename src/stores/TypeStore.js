import { defineStore } from "pinia";

export const typeStore = defineStore("TypeStore", {
  state: () => ({
    types: [
        {
            id: 1,
            descripcion: "Suspensión del servicio por falta de pago.",
        },
        {
            id: 2,
            descripcion: "Cobro en exceso en su recibo.",
        },
    ]
  }),
  getters: {
    getListTypes: (state) => state.types
  },
  actions: {
      
  },
});
