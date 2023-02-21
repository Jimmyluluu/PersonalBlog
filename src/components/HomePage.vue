<template>
  <v-app>
    <v-divider :thickness="4" color="info"></v-divider>
      <h1>
        {{ message }}
      </h1>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hi"
      }
    }
  }
</script>