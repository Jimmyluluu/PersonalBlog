<template>
  <v-app>
    <v-app-bar
      color="light-gray accent-4"
      dense
      dark
    >
    <v-toolbar-title>HomePage</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Jimmyluluu"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage';

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    //
  }),
};
</script>