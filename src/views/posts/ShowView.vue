<script setup>
import { usePostStore } from "@/stores/posts";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const { getPosts } = usePostStore();
const route = useRoute();
const post = ref(null);

onMounted(async () => (post.value = await getPosts(route.params.id)));
</script>
<template>
  <main>
    <div v-if="post" class="mt-8">
      <div class="border-l-4 border-blue-500 pl-4 mb-6">
        <h2 class="font-bold text-3xl">{{ post.title }}</h2>
        <p class="text-xs mb-4 text-slate-600">Post By: {{ post.user.name }}</p>
        <p>
          {{ post.body }}
        </p>
      </div>
    </div>
    <div v-else>
      <h3 class="title">Page Not Found</h3>
    </div>
  </main>
</template>
<!-- 22.21 -->
