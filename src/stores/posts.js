import { defineStore } from "pinia";

export const usePostStore = defineStore("postStore", {
  state: () => {
    return {
      errors: {},
    };
  },
  actions: {
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

      console.log(data);

      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.errors = {};
      }
    },
  },
});
