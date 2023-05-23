<script setup>

import AppHeader from './components/AppHeader.vue';
import { onMounted, ref } from 'vue';
import{storeToRefs}from 'pinia';
import { useUserStore } from './store/userStore';

const {user,hasUser} = storeToRefs(useUserStore());
const header=ref(null);

onMounted((value) => {
  console.log('> App-> onMounted');
});
</script>

<template>
  <AppHeader ref="header">
    Todo App
    <template #sub-header>
      <span v-if="hasUser">created by {{ user.name }}</span>
      <span v-else>noname</span>
    </template>
  </AppHeader>
  <div style="margin: 2rem 0;">
    <router-link to="/"> 
      Index
    </router-link>
    <router-link
      v-if="hasUser"
      to="/todos"
    >
      Todos
    </router-link>
  </div>
  <router-view />
</template>