<template>
  <v-app app color="grey darken-1">
    <AppBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';

export default {
  name: 'CoursicityWebApp',
  components: {
    AppBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  .v-application {
    background-color: #F5F5F5 !important;
  }
</style>
