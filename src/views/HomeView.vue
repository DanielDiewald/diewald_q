<script setup>
import { ref, onMounted } from 'vue';
import { useArticleStore } from '@/stores/articles.js';
import ArticleDialogVue from '../components/ArticleDialog.vue';

const toggle = ref(false);
let currentArticle = ref();

const articleStore = useArticleStore();
let slide = ref('1');

onMounted(async () => {
  await articleStore.getArticles();
});

const readMore = (article) => {
  currentArticle.value = article;
  toggle.value = !toggle.value;
};
</script>

<style scoped lang="sass">
.my-card
  width: 300px
  height: 530px
.card-title-box
  height: 80px
div
  color: primary
</style>

<template>
  <q-responsive :ratio="1.777">
    <q-carousel
      v-model="slide"
      :autoplay="4000"
      :infinite="true"
      :navigation="false"
    >
      <q-carousel-slide
        name="1"
        class="column no-wrap flex-center"
        img-src="@/assets/slideshow/1.jpg"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="2"
        class="column no-wrap flex-center"
        img-src="@/assets/slideshow/2.jpg"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="3"
        class="column no-wrap flex-center"
        img-src="@/assets/slideshow/3.jpg"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="4"
        class="column no-wrap flex-center"
        img-src="@/assets/slideshow/4.jpg"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="5"
        class="column no-wrap flex-center"
        img-src="@/assets/slideshow/5.jpg"
      >
      </q-carousel-slide>
    </q-carousel>
  </q-responsive>
  <div class="q-ma-lg q-gutter-md flex justify-center text-primary">
    <q-card class="my-card" v-for="a in articleStore.articles" :key="a.id">
      <img :src="`src/assets/images/intro/${a.image}`" />
      <q-card-section>
        <div class="text-h6 card-title-box" v-html="a.title"></div>
        <div class="text-subtitle2 ellipsis-3-lines">{{ a.text }}</div>
      </q-card-section>
      <div class="absolute-bottom-right">
        <q-btn flat @click="readMore(a)">Read More...</q-btn>
      </div>
    </q-card>
  </div>
  <ArticleDialogVue
    v-model:toggle="toggle"
    :article="currentArticle"
  ></ArticleDialogVue>
</template>
