<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h1">Search</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-text-field
          name="search"
          label="Search"
          solo
          v-model="searchInput"
          color="accent"
          prepend-inner-icon="fa-search"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row 
      justify="center" 
      align="center"
      class="mt-12"
      v-if="noSearchResults"
    >
      <p class="text-h3 font-weight-light text--secondary">No search results was found for {{ searchInput }} </p>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" class="mb-12" v-for="course in searchResults" :key="course.id">
        <VerticalCourseCard :course="course" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalCourseCard from '@/components/cards/VerticalCourseCard.vue'

export default {
  components: {
    VerticalCourseCard,
  },
  data () {
    return {
      searchInput: '',
      searchResults: [{
        id: '123',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Course Dummy #1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel lacus fermentum, fringilla felis ut, auctor lacus. Nunc at ante quis urna volutpat fringilla. Praesent vitae ultricies felis. Ut non pharetra eros. Fusce quam massa, condimentum ac tempor at, dapibus at quam. Maecenas vulputate a turpis in porttitor. Donec quam massa, faucibus quis sapien vitae, mollis convallis orci. Etiam quam nisi, sagittis sit amet porttitor cursus, accumsan et odio.'
      }],
    }
  },
  computed: {
    noSearchResults() {
      return false;
    }
  },
  mounted() {
    // TODO: XSS
    this.searchInput = this.$attrs.query;
  }
}
</script>

<style>

</style>
