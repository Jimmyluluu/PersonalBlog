<template>
  <div class="bg-auto">
    <div class="row">
      <div class="mx-auto py-1"></div>
      <div class="flex flex-col gap-5 py-5">
        <section v-for="post in posts" class="px-4 sm:px-6 lg:px-8">
          <article
            class="bg-slate-100 py-3 shadow overflow-hidden rounded-lg pb-8"
          >
            <div class="px-4 py-2">
              <h2 class="text-2xl text-gray-800 font-bold mb-2">
                {{ post.title }}
              </h2>
              <p class="text-s text-gray-500 mb-2">
                {{ post.date }}
              </p>
            </div>
            <div class="px-4 py-2">
              <p class="text-base text-gray-800">{{ post.content }}</p>
              <router-link
                class="text-blue-300 font-bold hover:underline"
                :to="`${post.url}`"
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
    url: "/aboutthisblog",
  },
  {
    title: "作業系統的 I/O Operations",
    date: "Create at 2023/09/01",
    content: "此篇將描述 Polling I/O vs Interrupted I/O，並且描述 DMA",
    url: "/IOOperations",
  },
]);
const items = ref([
  { name: "Doc", http: "https://github.com/Jimmyluluu" },
  { name: "About", http: "#" },
  { name: "Content", http: "#" },
]);
</script>
