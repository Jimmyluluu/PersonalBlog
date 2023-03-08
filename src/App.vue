<template>
  <div>
    <header class="bg-gray-900 text-white">
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <nav>
        <ul class="inline-flex">
          <li><a href="#" class="px-4 py-2 hover:bg-gray-800">Home</a></li>
          <li><a href="#" class="px-4 py-2 hover:bg-gray-800">About</a></li>
          <li><a href="#" class="px-4 py-2 hover:bg-gray-800">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <article class="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-2xl font-bold mb-2">{{ post1.title }}</h2>
          <p class="text-sm text-gray-500 mb-2">Author: {{ post1.author }} | Date: {{ post1.date }}</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <p class="text-base">{{ post1.content }}</p>
          <a href="#" class="text-blue-600 font-bold hover:underline">Read more...</a>
        </div>
      </article>

      <article class="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-2xl font-bold mb-2">{{ post2.title }}</h2>
          <p class="text-sm text-gray-500 mb-2">Author: {{ post2.author }} | Date: {{ post2.date }}</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <p class="text-base">{{ post2.content }}</p>
          <a href="#" class="text-blue-600 font-bold hover:underline">Read more...</a>
        </div>
      </article>
    </main>

    <footer class="bg-gray-900 text-white text-center py-4">
      <p>&copy; 2023 My Blog</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Blog',
      post1: {
        title: 'First Blog',
        author: 'John Doe',
        date: 'March 1, 2023',
        content: 'Lorem ipsum dolor sit amet.'
      },
      post2: {
        title: 'Second Blog',
        author: 'Jane Smith',
        date: 'March 3, 2023',
        content: 'Praesent ac risus vel odio.'
      }
    }
  }
}
</script>

<style>
/* 在這裡繼續使用 Tailwind CSS 的樣式 */
</style>
