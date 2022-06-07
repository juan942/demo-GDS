import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 1,
  }),
  getters: {
    only: (state) => state.counter,
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
