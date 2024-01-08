<template>
  <nav class="w-screen bg-stone-800 py-4 justify-items-start">
    <div class="max-w-2xl px-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center">
        <router-link
          class="text-cyan-50 px-5 hover:bg-gray-400 rounded-md font-medium"
          to="/"
          >首頁</router-link
        >
        <router-link
          class="text-cyan-50 px-5 hover:bg-gray-400 rounded-md font-medium"
          to="/list"
          >文章列表</router-link
        >
        <router-link
          class="text-cyan-50 px-5 hover:bg-gray-400 rounded-md font-medium"
          to="/exam"
          >考試筆記</router-link
        >
      </div>
    </div>
  </nav>
  <div class="flex flex-col min-h-screen bg-gray-300">
    <router-view></router-view>
  </div>
  <footer
    class="flex justify-center w-full bg-gray-900 text-gray-200 text-center py-2 mt-auto"
  >
    <a class="px-5">&copy; 2023 Jimmy Lu</a>
    <a href="https://github.com/Jimmyluluu" class="px-5">Github</a>
    <!--<a
      href="https://www.linkedin.com/in/%E6%95%AC%E5%85%83-%E9%AD%AF-38787b265/"
      class="px-5"
      >Linkedin</a
    >-->
  </footer>
</template>
