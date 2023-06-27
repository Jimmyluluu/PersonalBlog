<template>
  <div class="bg-auto">
    <div class="row">
      <div class="mx-auto py-4"></div>
      <div class="flex flex-col gap-5">
        <section v-for="post in posts" class="px-4 sm:px-6 lg:px-8">
          <article class="bg-white shadow overflow-hidden rounded-lg pb-8">
            <div class="px-2 py-2 sm:px-4">
              <h2 class="text-2xl font-bold mb-2">{{ post.title }}</h2>
              <p class="text-s text-gray-500 mb-2">
                {{ post.date }}
              </p>
            </div>
            <div class="px-2 py-2 sm:p-4">
              <p class="text-base">{{ post.content }}</p>
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
    date: "2023/06/28",
    content:
      "這是我第一次嘗試寫一個個人部落格，開發方式是使用 Vue3 + Tailwind CSS，目前還長得很醜，之後會花時間把它變好看，在此紀錄第一篇文章～～",
  },
]);
</script>
