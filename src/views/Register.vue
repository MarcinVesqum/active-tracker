<template>
  <div class="max-w-screen-sm mx-auto py-10 px-4 flex flex-col flex-grow-4">
    <!-- Error Handling -->
    <div v-if="errMsg" class="mb-10 p-4 rounded-md bg-light-grey">
        <p class="text-red-500">{{ errMsg }}</p>
    </div>
    <!-- Register -->
    <form @submit.prevent="register" class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg">
        <h1 class="text-3xl text-at-light-green mb-4">Register</h1>
        <div class="flex flex-col mb-2">
            <label for="email" class="mb-1 text-sm text-at-light-green">Email</label>
            <input 
            type="email" 
            required 
            class="p-2 text-gray-500 focus:outline-none" 
            id="email"
            v-model="email"
            >
        </div>
        <div class="flex flex-col mb-2">
            <label for="password" class="mb-1 text-sm text-at-light-green">Password</label>
            <input 
            type="password" 
            required 
            class="p-2 text-gray-500 focus:outline-none" 
            id="password"
            v-model.trim="password"
            >
        </div>
        <div class="flex flex-col mb-2">
            <label for="confirmPassword" class="mb-1 text-sm text-at-light-green">Confirm Password</label>
            <input 
            type="password" 
            required 
            class="p-2 text-gray-500 focus:outline-none" 
            id="confirmPassword"
            v-model.trim="confirmPassword"
            >
        </div>
        <button type="submit" class="
        mb-4 py-2 px-6 mt-5 self-start rounded-md 
        border-solid border-2 border-transparent
        bg-at-light-green text-sm text-white 
        duration-200 hover:border-at-light-green hover:bg-white 
        hover:text-at-light-green ">Register</button>

        <router-link class="text-sm mt-6 text-center" :to="{ name: 'Login' }">
            Already have an account? <span class="text-at-light-green text-lg">Login</span>
        </router-link>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supbase/init";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errMsg = ref(null);


const register = async () => {
    if (password.value === confirmPassword.value) {
        try {
            const { error } = await supabase.auth.signUp({
                email: email.value,
                password: password.value,
            })
            if (error) throw error;
            router.push({ name: 'Login' })
        } catch(error) {
            errMsg.value = error.message;
            setTimeout(() => {
                errMsg.value = null;
            }, 5000)
        }

        return;
    }
    errMsg.value = "Error: Password do not match"
    setTimeout(() => {
        errMsg.value = null;
    }, 5000)
}


</script>

<style lang="scss" scoped>

</style>