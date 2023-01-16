<script setup>
import { ref } from 'vue';
import SideBar from './SideBar.vue';
import LoginDialog from './LoginDialog.vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();
let user = userStore.user;
const toggle = ref(false);
const loginToggle = ref(false);
const toggleLeftDrawer = () => (toggle.value = !toggle.value);
</script>

<template>
    <q-header elevated class="bg-white text-primary" height-hint="98">
          <q-toolbar class="q-pa-md">
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
            <q-toolbar-title class="text-center">
                <img class="gt-xs" style="height: 100px" src="/Logos/Young-Living-Logo.svg" />
                <img  class="lt-sm" style="height: 100px" src="/Logos/Young-Living-Logo small.svg" />
            </q-toolbar-title>
            <q-btn
              v-if="!user.isLoggedIn"
              @click="loginToggle = true"
              class="text-primary q-mr-lg q-pa-md"
              dense
              flat>
              Please login
            </q-btn>
            <div v-else>
            <q-btn @click="user.isLoggedIn = false" flat class="text-primary q-mr-md">
            <div class="gt-xs">{{ userStore.userFullName }}</div>
            <q-icon class="q-ml-sm" size="1.1rem" name="fa-solid fa-key" />
            </q-btn>
            <q-btn class="text-primary q-mr-lg q-pa-md" dense flat icon="fa-solid fa-shopping-cart">
              <q-badge class="bg-negative q-pa-xs" floating>{{ Math.round(Math.random() * 20) }}</q-badge>
            </q-btn>
            </div>
          </q-toolbar>
        </q-header>
    <SideBar v-model:toggle="toggle"></SideBar>
    <LoginDialog v-model:toggle="loginToggle"></LoginDialog>
</template>