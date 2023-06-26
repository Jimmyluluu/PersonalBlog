<template>
  <div>
    <Markdown :source="source" />
    <Markdown :source="Test" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Markdown from 'vue3-markdown-it';

const source = ref('- Hello World!');
</script>
