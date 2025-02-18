<script setup>
import { usePostStore } from "@/stores/posts";
import { onMounted, ref } from "vue";
const { getAllPosts } = usePostStore();
const posts = ref([]);

onMounted(async () => (posts.value = await getAllPosts()));
</script>

<template>
  <main>
    <h1 class="title">Last Post</h1>
    <div v-if="posts.length > 0">
      <div
        v-for="post in posts"
        :key="post.id"
        class="border-l-4 border-blue-500 pl-4 mb-6"
      >
        <h2 class="font-bold text-3xl">{{ post.title }}</h2>
        <p class="text-xs mb-4 text-slate-600">Post By: {{ post.user.name }}</p>
        <p>
          {{ post.body }}
          <router-link
            :to="{ name: 'show', params: { id: post.id } }"
            class="text-blue-500 underline font-bold"
            >Read More...</router-link
          >
        </p>
      </div>
    </div>
    <div v-else="posts.length > 0">
      <h3 class="title">Thare are no Post</h3>
    </div>
  </main>
</template>
