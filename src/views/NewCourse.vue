<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h1">New Course</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CourseForm :loading="loading" @submit="submit" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CourseForm from '@/components/courses/CourseForm.vue';

export default {
  components: {
    CourseForm,
  },
  data() {
    return {
      loading: {
        isLoading: false,
        message: '',
      },
    };
  },
  methods: {
    submit(newCourse) { // eslint-disable-line
      // TODO
      this.loading = {
        isLoading: true,
        message: 'Creating New Course',
      };

      const self = this;
      setTimeout(() => {
        self.loading = {
          isLoading: false,
        }
      }, 1000);
    }
  }
}
</script>

<style>

</style>
