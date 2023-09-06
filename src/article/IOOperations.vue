<template>
  <div class="bg-auto px-10">
    <div class="px-10">
      <div class="bg-slate-100 rounded-lg flex justify-center px-100 py-10">
        <article class="prose max-w-none justify-center px-10">
          <h2 class="text-gray-800">{{ posts.title }}</h2>
          <p class="text-s text-gray-500">{{ posts.date }}</p>
          <p class="text-base text-gray-800">
            在讀作業系統的時候，時常被這些關於 I/O
            操作的名詞搞亂，因此決定來寫一篇文章稍微釐清一下重點。
          </p>
          <h3 class="text-gray-800">Interrupt I/O</h3>
          <h4 class="text-gray-800">流程</h4>
          <ol>
          <li class="text-gray-800">
            當 CPU 偵測到有中斷訊號 om Interrupt-request line CPU 會通知 kernel
          </li>          
          </ol>
          <h3 class="text-gray-800">Polling I/O</h3>
          <h3 class="text-gray-800">DMA</h3>
          <p class="text-base text-gray-800">....會再找時間更新上去</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const posts = ref({
  title: "作業系統的 I/O Operations",
  date: "2023/09/01",
});
</script>
