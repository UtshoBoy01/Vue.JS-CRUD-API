<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";

const { errors } = storeToRefs(useAuthStore());
const { authenticate } = useAuthStore();

const formData = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
onMounted(() => (errors.value = {}));
</script>

<template>
  <main>
    <h1 class="title">Register New Account</h1>
    <form
      @submit.prevent="authenticate('register', formData)"
      class="w-1/2 mx-auto space-y-6 border-4 border-double border-gray-200 p-6 rounded-xl"
    >
      <div>
        <input type="text" placeholder="name" v-model="formData.name" />
        <p v-if="errors.name" class="error">{{ errors.name[0] }}</p>
      </div>
      <div>
        <input type="email" placeholder="Email" v-model="formData.email" />
        <p v-if="errors.email" class="error">{{ errors.email[0] }}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
        />
        <p v-if="errors.password" class="error">{{ errors.password[0] }}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="formData.password_confirmation"
        />
        <p v-if="errors.password_confirmation" class="error">
          {{ errors.password_confirmation[0] }}
        </p>
      </div>
      <button class="primary-btn">Register</button>
    </form>
  </main>
</template>
