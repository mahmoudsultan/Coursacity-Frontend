<template>
  <v-container>
    <CourseDetails 
      v-if="!loading"
      :courseDetails="courseDetails"
      @deleteCourse="deleteCourse"
    />
  </v-container>
</template>

<script>
import CourseDetails from '@/components/courses/CourseDetails.vue'

export default {
  props: {
    passedCourse: {
      type: Object,
      default: null,
      required: false
    }
  },
  components: {
    CourseDetails,
  },
  data() {
    return {
      fetchedCourse: null,
      loading: true,
      dummyCourse: {
        id: '123',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Course Dummy #1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel lacus fermentum, fringilla felis ut, auctor lacus. Nunc at ante quis urna volutpat fringilla. Praesent vitae ultricies felis. Ut non pharetra eros. Fusce quam massa, condimentum ac tempor at, dapibus at quam. Maecenas vulputate a turpis in porttitor. Donec quam massa, faucibus quis sapien vitae, mollis convallis orci. Etiam quam nisi, sagittis sit amet porttitor cursus, accumsan et odio.'
      }
    }
  },
  computed: {
    courseId() {
      return this.$route.params.id;
    },
    courseDetails() {
      return this.passedCourse || this.fetchedCourse;
    }
  },
  methods: {
    fetchCourse() {
      this.loading = true;

      const self = this;
      setTimeout(() => {
        self.fetchedCourse = self.dummyCourse;
        self.loading = false;
      }, 1000);
    },
    deleteCourse() {
      this.loading = true;

      const self = this;
      setTimeout(() => {
        this.$router.push({ name: 'Courses' })
        self.loading = false;
      }, 1000);
    }
  },
  mounted () {
    if (!this.passedCourse) {
      this.fetchCourse();
    }
  }
}
</script>

<style>

</style>