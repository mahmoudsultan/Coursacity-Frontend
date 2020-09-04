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
    async submit(newCourse) {
      this.loading = {
        isLoading: true,
        message: 'Creating New Course',
      };

      const courseFormData = new FormData();
      courseFormData.append('title', newCourse.title);
      courseFormData.append('description', newCourse.description);
      courseFormData.append('slug', newCourse.slug);
      courseFormData.append('photo', newCourse.photo);

      try {
        const responseData = (await this.$axios({
          method: 'post',
          url: '/courses',
          data: courseFormData,
          headers: {'Content-Type': 'multipart/form-data' }
        })).data;

        const createdCourse = responseData.course;
        this.$router.push({ name: 'CourseDetails', params: { id: createdCourse.id } });

      } catch (e) {
        // TODO: Better Error Handling Here.
        console.error(e); // eslint-disable-line
      }

    }
  }
}
</script>

<style>

</style>
