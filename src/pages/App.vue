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
          to="/exam"
          >考試筆記</router-link
        >
      </div>
    </div>
  </nav>
  <div>
    <router-view></router-view>
  </div>
</template>
