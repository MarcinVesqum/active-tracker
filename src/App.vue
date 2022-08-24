<template>
  <div class="w-h-full font-Poppins box-border">
    <!-- nav -->
    <Navigation/>
    <router-view/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navigation from './components/layouts/Navigation.vue';
import { supabase } from './supbase/supabase.js';
import { useStore } from 'vuex';

const appReady = ref(null);
const store  = useStore()
const user = supabase.auth.user();

if (!user) {
  appReady.value = true;
}

supabase.auth.onAuthStateChange((_, session) => {
  store.commit('setUser', session)
  appReady.value = true;
})


</script>


<style lang="scss">

</style>
