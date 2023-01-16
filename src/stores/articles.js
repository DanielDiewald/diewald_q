import { defineStore } from 'pinia'

import articlesJson from '@/assets/data/articles.json';

export const useArticleStore = defineStore('articles', () => {
  const articles = articlesJson;
  return { articles }
})
