import { defineStore } from 'pinia';
import axios from 'axios';

export const productStore = defineStore('products', {
  state: () => ({ product: [] }),
  getters: {},
  actions: {
    async getProducts() {
      const { data } = await axios.get('http://localhost:3000/products');
      this.product = data;
    },
  },
});
