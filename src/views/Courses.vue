<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="8">
        <h1 :class="textSize">
          Courses
          <v-btn right color="success" :to="{ name: 'NewCourse' }">
            <v-icon left small>fa-plus</v-icon>
            New Course
          </v-btn>
        </h1>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="6" lg="4">
        <v-text-field
          name="search"
          label="Search"
          id="id"
          solo
          class="mt-lg-5 mt-md-2 mt-5"
          color="accent"
          prepend-inner-icon="fa-search"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-8" justify="end">
      <v-col cols="5" sm="2">
        <v-select
          :items="[1]"
          value="1"
          label="Courses Per Page"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="5" sm="2">
        <v-select
          :items="[1]"
          value="1"
          disabled
          label="Sort By"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3" class="mb-12" v-for="course in dummyCourses" :key="course.id">
        <VerticalCourseCard :course="course" />
      </v-col>
    </v-row>
    <v-pagination
      class="mb-12"
      v-model="page"
      :length="6"
    ></v-pagination>
  </v-container>
</template>

<script>
import VerticalCourseCard from '@/components/cards/VerticalCourseCard.vue'

export default {
  components: {
    VerticalCourseCard,
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {
    textSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'text-h3'
        case 'sm': return 'text-h3'
        case 'md': return 'text-h2'
        default: return 'text-h1'
      }
    },
    dummyCourses() {
      const dummyCourse = {
        id: '123',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Course Dummy #1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel lacus fermentum, fringilla felis ut, auctor lacus. Nunc at ante quis urna volutpat fringilla. Praesent vitae ultricies felis. Ut non pharetra eros. Fusce quam massa, condimentum ac tempor at, dapibus at quam. Maecenas vulputate a turpis in porttitor. Donec quam massa, faucibus quis sapien vitae, mollis convallis orci. Etiam quam nisi, sagittis sit amet porttitor cursus, accumsan et odio.'
      };

      const dummyCoursesArr = [];
      for (let i = 0; i < 20; i++) {
        dummyCoursesArr.push({ ...dummyCourse, id: i });
      }

      return dummyCoursesArr;
    }
  }
}
</script>

<style>

</style>
