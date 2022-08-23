<template>
  <header class="bg-at-light-green text-white">
    <nav class="container py-5 px-4 flex flex-col sm:flex-row items-center">
      <div class="logo flex items-center gap-x-px-4">
        <VueIcon class="w-14"/>
        <h1 class="text-lg">Active Tracker</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link class="cursor-pointer" :to="{ name: 'Home'}">Home</router-link>
        <router-link v-if="user" class="cursor-pointer" :to="{ name: 'Create'}">Create</router-link>
        <router-link v-if="!user"  class="cursor-pointer" :to="{ name: 'Login'}">Login</router-link>
        <li v-if="user" class="cursor-pointer" @click="logout">Logout</li>
      </ul>

    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import VueIcon from '../../assets/vue.svg';
import { supabase } from '../../supbase/supabase';

const store = useStore();
const router = useRouter();


const user = computed(() => store.state.user);

const logout = async () => {
  await supabase.auth.signOut();
  router.push({ name: 'Home'})
}




</script>

<style lang="scss" scoped>

</style>