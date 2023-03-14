<template>
  <div class="bg-auto bg-gray-300 min-h-screen">
    <h1 class="text-2xl text-gray-800 font-bold">{{ title }}</h1>
    <header class="">
      <div class="nav-container flex justify-end">
        <nav>
          <ul class="inline-flex">
            <li v-for="item in items">
              <a :href="item.http" class="px-4 hover:bg-gray-800">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main v-for="post in posts" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 body">
      <article class="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-2xl font-bold mb-2">{{ post.title }}</h2>
          <p class="text-sm text-gray-500 mb-2">Author: {{ post.author }} | Date: {{ post.date }}</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <p class="text-base">{{ post.content }}</p>
          <a href="#" class="text-blue-600 font-bold hover:underline">Read more...</a>
        </div>
      </article>
    </main>

    <footer class="bottom-0 w-full bg-gray-900 text-gray-200 text-center py-2">
      <nav>
        <ul class="inline-flex">
          <li v-for="item in items">
            <a :href="item.http" class="px-4 hover:bg-gray-800">{{ item.name }}</a>
          </li>
          <p>&copy; 2023 Jimmy Lu</p>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Jimmy\'s Blog',
      posts: [{
        title: 'Test01',
        author: 'Jimmy Lu',
        date: 'March 1, 2023',
        content: 'AAAA.'
      },
      {
        title: 'Test02',
        author: 'Jimmy Lu',
        date: 'March 3, 2023',
        content: 'BBBB.'
      },      
      {
        title: 'Test03',
        author: 'Jimmy Lu',
        date: 'March 3, 2023',
        content: 'CCCC.'
      },
      {
        title: 'Test04',
        author: 'Jimmy Lu',
        date: 'March 3, 2023',
        content: 'DDDD.'
      }],
      items: [
        { name: 'Doc', http: 'https://github.com/Jimmyluluu' },
        { name: 'About', http: '#' },
        { name: 'Content', http: '#' },
      ]
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  background-color: #f7fafc;
}
</style>