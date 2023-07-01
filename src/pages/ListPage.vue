<template>
  <div class="bg-auto">
    <div class="row">
      <div class="mx-auto py-1"></div>
      <div class="flex flex-col gap-5 py-5">
        <section v-for="post in posts" class="px-4 sm:px-6 lg:px-8">
          <article
            class="bg-slate-100 py-3 shadow overflow-hidden rounded-lg pb-8"
          >
            <div class="px-2 py-2 sm:px-4">
              <h2 class="text-2xl text-gray-800 font-bold mb-2">
                {{ post.title }}
              </h2>
              <p class="text-s text-gray-500 mb-2">
                {{ post.date }}
              </p>
            </div>
            <div class="px-2 py-2 sm:p-4">
              <p class="text-base text-gray-800">{{ post.content }}</p>
              <router-link
                class="text-blue-300 font-bold hover:underline"
                to="/aboutthisblog"
                >Read more...</router-link
              >
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const posts = ref([
  {
    title: "關於這個部落格",
    date: "Create at 2023/06/28",
    content: "關於這個部落格",
  },
]);
const items = ref([
  { name: "Doc", http: "https://github.com/Jimmyluluu" },
  { name: "About", http: "#" },
  { name: "Content", http: "#" },
]);
</script>
