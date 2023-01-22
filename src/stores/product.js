import { defineStore } from 'pinia';

import productJson from '@/assets/data/products.json';

export const productStore = defineStore('articles', () => {
  const product = productJson;
  return { product };
});
