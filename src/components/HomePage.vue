<template>
  <div>
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <header class="bg-gray-700 text-white">
      <div class="nav-container flex justify-end">
        <nav>
          <ul class="inline-flex">
            <li v-for="(item, index) in items" :key="index">
              <a :href="item.http" class="px-4 hover:bg-gray-800">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
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

    <div class="footer bg-gray-900 text-white text-center py-2">
      <p>&copy; 2023 Jimmy Lu</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Jimmy\'s Blog',
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
      },
      items: [
        { name: 'Github', http: 'https://github.com/Jimmyluluu' },
        { name: 'About', http: '#' },
        { name: 'Content', http: '#' },
      ]
    }
  }
}
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

</style>