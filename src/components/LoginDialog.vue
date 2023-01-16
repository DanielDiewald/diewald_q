<script setup>
import { ref } from 'vue';
import { useVModel } from '@vueuse/core';
import { notifyWarning, notifySuccess } from '../composable/notify.js';
import { useUserStore } from '../stores/user';
const props = defineProps({ toggle: { type: Boolean, required: true, default: false }});
const emit = defineEmits(['update:toggle']);
const dialogOpen = useVModel(props, 'toggle', emit);

const termsAndLicense = ref(false)
const firstName = ref('');
const lastName = ref('');
const age = ref();

const userStore = useUserStore();
const user = userStore.user;

const close = () => {
  emit('update:toggle', false);
}

 const onSubmit = () => {
        if (termsAndLicense.value !== true) {
          notifyWarning('You need to accept the license and terms first');
        }
        else {
          user.firstName = firstName.value;
          user.lastName = lastName.value;
          user.isLoggedIn = true;
          user.age = age.value;
          notifySuccess('Success');
          close();
        }
 }
      const onReset = () => {
        firstName.value = null;
        lastName.value = null;
        age.value = null;
        termsAndLicense.value = false;
      }
</script>

<template>
    <q-dialog v-model="dialogOpen">
      <q-card class="q-pa-md" style="width: 600px;">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="firstName"
        label="Your first name *"
        hint="First name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="lastName"
        label="Your last name *"
        hint="Last name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="termsAndLicense" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn label="Close" @click="close()" color="red-5" class="q-ml-sm" />
      </div>
    </q-form>
      </q-card>
    </q-dialog>
</template>