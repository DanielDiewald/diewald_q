<script setup>
import { useVModel } from '@vueuse/core';
const props = defineProps({ toggle: { type: Boolean, required: true, default: false } });
const emit = defineEmits(['update:toggle']);
const leftDrawerOpen = useVModel(props, 'toggle', emit);
</script>

<template>
  <q-drawer v-model="leftDrawerOpen" :width="220" show-if-above side="left" elevated>
    <!-- drawer content -->
    <q-list>
      <q-item-label header class="q-mt-md">EXPLORE OUR SITE</q-item-label>
      <q-item clickable active-class="bg-primary text-white" to="/">
        <q-item-section avatar>
          <q-icon name="fa-solid fa-home" />
        </q-item-section>
        <q-item-section> 
          <q-item-label>Homepage</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable active-class="bg-primary text-white" to="/essentialoils">
        <q-item-section avatar>
          <q-icon name="fa-solid fa-droplet" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Essential Oils</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable active-class="bg-primary text-white" to="/products">
        <q-item-section avatar>
          <q-icon name="fa-solid fa-search" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Search Products</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable active-class="bg-primary text-white" to="/about">
        <q-item-section avatar>
          <q-icon name="fa-solid fa-address-card" />
        </q-item-section>
        <q-item-section>
          <q-item-label>About Us</q-item-label>
        </q-item-section>
      </q-item>
      <q-item-label header class="q-mt-md">CONTACT US</q-item-label>
        <q-item clickable active-class="bg-primary text-white" to="/mail">
        <q-item-section avatar>
          <q-icon name="fa-solid fa-envelope" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Email</q-item-label>
        </q-item-section>
      </q-item>
        <q-item clickable active-class="bg-primary text-white" to="/facebook">
        <q-item-section avatar>
          <q-icon name="fa-brands fa-facebook" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Facebook</q-item-label>
        </q-item-section>
      </q-item>
        <q-item clickable active-class="bg-primary text-white" to="/twitter">
        <q-item-section avatar>
          <q-icon name="fa-brands fa-twitter" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Twitter</q-item-label>
        </q-item-section>
      </q-item>
        <q-item clickable active-class="bg-primary text-white" to="/instagram">
        <q-item-section avatar>
          <q-icon name="fa-brands fa-instagram" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Instagram</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
