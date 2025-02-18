<script setup>
import { usePostStore } from "@/stores/posts";
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";

const { createPost } = usePostStore();
const { errors } = storeToRefs(usePostStore());

const formData = reactive({
  title: "",
  body: "",
});

onMounted(() => (errors.value = {}));
</script>
<template>
  <main>
    <h1 class="title">Create Post</h1>
    <form
      @submit.prevent="createPost(formData)"
      class="w-1/2 mx-auto space-y-6 border-4 border-double border-gray-400 p-6 rounded-xl"
    >
      <div>
        <input type="text" placeholder="post Title" v-model="formData.title" />
        <p v-if="errors.title" class="error">{{ errors.title[0] }}</p>
      </div>
      <div>
        <textarea
          role="6"
          placeholder="Post Content"
          v-model="formData.body"
        ></textarea>
        <p v-if="errors.body" class="error">{{ errors.body[0] }}</p>
      </div>
      <button class="primary-btn">Create</button>
    </form>
  </main>
</template>
