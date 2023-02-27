<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const name = 1
const items = [{message:"1"},{message:"2"},{message:"3"},{message:"4"},{message:"5"}]
function test(){  
  return count.value %2
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ name }}</h1>
  <li v-for="item in items">
  {{ item.message }}
  </li>
  <p v-if= "test()" >GoGo</p>


  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">@2023 Jimmy Lu</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
