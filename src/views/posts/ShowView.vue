<script setup>
import { useAuthStore } from "@/stores/auth";
import { usePostStore } from "@/stores/posts";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const { getPosts, deletePost } = usePostStore();
const authStore = useAuthStore();
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
        <div
          v-if="authStore.user && authStore.user.id === post.user_id"
          class="flex items-center"
        >
          <form @submit.prevent="deletePost(post)">
            <button
              class="border font-bold border-red-500 p-1 px-3 rounded-sm mt-3 text-red-500 hover:bg-red-500 hover:text-white duration-300"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="title">Page Not Found</h3>
    </div>
  </main>
</template>
<!-- 28.40 -->
