import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const usePostStore = defineStore("postStore", {
  state: () => {
    return {
      errors: {},
    };
  },
  actions: {
    //**************************** Get All Post  **************************** */
    async getAllPosts() {
      const res = await fetch("/api/posts");
      const data = await res.json();
      return data;
    },

    //**************************** Get a Post  **************************** */
    async getPosts(post) {
      const res = await fetch(`/api/posts/${post}`);
      const data = await res.json();
      // console.log(data);

      return data.post;
    },

    //**************************** Create a Post  **************************** */
    async createPost(formData) {
      const res = await fetch("api/posts", {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      //! Log
      // console.log(data);

      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.errors = {};
        this.router.push({ name: "home" });
      }
    },

    //**************************** Delete a Post  **************************** */
    async deletePost(post) {
      const authStore = useAuthStore();
      if (authStore.user.id === post.user_id) {
        const res = await fetch(`/api/posts/${post.id}`, {
          method: "delete",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          this.router.push({ name: "home" });
        }
        // console.log(data);
      }
    },
  },
});
