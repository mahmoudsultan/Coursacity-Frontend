<template>
  <h1>{{ courseId }}</h1>
</template>

<script>
export default {
  computed: {
    courseId() {
      return this.$route.params.id;
    }
  }
}
</script>

<style>

</style>