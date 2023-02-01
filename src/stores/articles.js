import { defineStore } from 'pinia';
import axios from 'axios';

export const useArticleStore = defineStore('articles', {
  state: () => ({ articles: [] }),
  getters: {},
  actions: {
    async getArticles() {
      const { data } = await axios.get('http://localhost:3000/articles');
      this.articles = data;
    },
  },
});
