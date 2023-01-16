<script setup>
import { useVModel } from '@vueuse/core';
const props = defineProps({ toggle: { type: Boolean, required: true, default: false }, article: {type: Object, required: true} });
const emit = defineEmits(['update:toggle']);
const dialogOpen = useVModel(props, 'toggle', emit);
</script>

<template>
    <q-dialog v-model="dialogOpen">
      <q-card>
        <q-card-section class="flex items-center q-gutter-lg">
            <img :src="`src/assets/images/intro/${article.image}`" style="width: 150px">
          <div class="text-h6" v-html="article.title"></div>
        </q-card-section>

        <q-card-section class="">
          {{article.text}}
        </q-card-section>
        <q-card-section class="q-gutter-md flex row items-center">
          <q-chip  text-color="black" ><q-icon class="q-pr-md" name="favorite_border" color="red" size="20px"/>{{article.likes}}</q-chip>
          <div class="text">{{article.date}}</div>
        </q-card-section>


        <q-card-actions align="right">
          <q-btn outline label="OK" color="primary" @click="emit('update:toggle',false)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>