<template>
  <v-text-field
    class="pa-0 ma-0"
    single-line
    hide-details
    dense
    rounded
    name="search"
    label="Search"
    solo
    v-model="searchInput"
    color="accent"
    prepend-inner-icon="fa-search"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      searchInput: ''
    }
  }
}
</script>

<style>

</style>