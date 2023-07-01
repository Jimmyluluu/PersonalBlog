<template>
  <div class="bg-auto px-10">
    <div class="px-10">
      <div class="bg-slate-100 rounded-lg flex justify-center px-100 py-10">
        <article class="prose max-w-none justify-center px-10">
          <h2 class="text-gray-800 font-bold">{{ posts.title }}</h2>
          <p class="text-s text-gray-500">{{ posts.date }}</p>
          <p class="text-base text-gray-800">{{ posts.content }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const posts = ref({
  title: "關於這個部落格",
  date: "2023/06/28",
  content:
    "這是我第一次嘗試寫一個個人部落格，開發方式是使用 Vue3 + Tailwind CSS，目前還長得很醜，之後會花時間把它變好看，在此紀錄第一篇文章～～",
});
</script>
