<template>
  <div class="bg-auto bg-gray-300 flex-grow">
    <div class="row">
      <div class="mx-auto py-4">
        <p class="text-gray-700 mb-4"></p>
      </div>

      <div class="flex flex-col gap-5">
        <section v-for="post in posts" class="px-4 sm:px-6 lg:px-8">
          <article class="bg-white shadow overflow-hidden rounded-lg pb-8">
            <div class="px-4 py-5 sm:px-6">
              <h2 class="text-2xl font-bold mb-2">{{ post.title }}</h2>
              <p class="text-sm text-gray-500 mb-2">
                Author: {{ post.author }} | Date: {{ post.date }}
              </p>
            </div>
            <div class="px-4 py-5 sm:p-6">
              <p class="text-base">{{ post.content }}</p>
              <a href="#" class="text-blue-600 font-bold hover:underline"
                >Read more...</a
              >
            </div>
          </article>
        </section>
      </div>
    </div>
    <div class="h-12" />
  </div>

  <footer class="w-full bg-gray-900 text-gray-200 text-center py-2">
    <nav>
      <a class="inline-flex px-10">&copy; 2023 Jimmy Lu</a>
      <a href="https://github.com/Jimmyluluu">Github</a>
    </nav>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Jimmy's Blog");
const posts = ref([
  {
    title: "Test01",
    author: "Jimmy Lu",
    date: "March 1, 2023",
    content: "AAAA.",
  },
  {
    title: "Test02",
    author: "Jimmy Lu",
    date: "March 3, 2023",
    content: "BBBB.",
  },
  {
    title: "Test03",
    author: "Jimmy Lu",
    date: "March 3, 2023",
    content: "CCCC.",
  },
  {
    title: "Test04",
    author: "Jimmy Lu",
    date: "March 3, 2023",
    content: "DDDD.",
  },
  {
    title: "Test04",
    author: "Jimmy Lu",
    date: "March 3, 2023",
    content: "DDDD.",
  },
]);

const items = ref([
  { name: "Doc", http: "https://github.com/Jimmyluluu" },
  { name: "About", http: "#" },
  { name: "Content", http: "#" },
]);
</script>

<style>
/* html,
body {
  height: 100%;
  background-color: #e0921e;
} */
</style>
