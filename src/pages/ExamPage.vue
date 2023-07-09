<template>
  <div class="px-10 py-10">
    <table
      class="border-collapse border border-spacing-2 border-slate-500 hover:table-auto"
    >
      <thead>
        <tr>
          <th class="border border-slate-600 text-gray-800">7-9</th>
          <th class="border border-slate-600 text-gray-800">10-11</th>
          <th class="border border-slate-600 text-gray-800">12-1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-700 text-gray-800">把課程都聽完</td>
          <td class="border border-slate-700 text-gray-800">讀第二遍做筆記</td>
          <td class="border border-slate-700 text-gray-800">
            瘋狂寫考古題訂正
          </td>
        </tr>
      </tbody>
    </table>
    <h1 class="text-gray-800 py-5">考試準備第 {{ number }} 天</h1>
    <div>
      <img
        src="https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif"
        alt="this slowpoke moves"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const number = ref(1);

onMounted(updateNumber);

function updateNumber() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const dateString = `${year}-${month}-${day}`;
  const timestamp = new Date(dateString).getTime() / 1000;
  const days = Math.floor((timestamp - 1688313600) / (24 * 60 * 60));
  number.value = number.value + days;
}
</script>
