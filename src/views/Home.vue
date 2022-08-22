<template>
  <div>
    Home
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supbase/supabase";


const data = ref([]);
const dataLoaded = ref(null);

// Get data
const getData = async () => {
  try {
    const { data: workouts, error } = await supabase.from('workouts').select('*');
    if (error) throw error;
    data.value = workouts;
    dataLoaded.value = true;
  } 
  catch(error) {
    console.warn(error.message)
  }
}


getData();

</script>

<style lang="scss" scoped>

</style>