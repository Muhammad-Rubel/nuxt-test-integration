import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'general',
  state: () => ({
    count: 1,
  }),
  actions: {
    increment() {
      this.count += 1;
    },
  },
  getters: {},
});
