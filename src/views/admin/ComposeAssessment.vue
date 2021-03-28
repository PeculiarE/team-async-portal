<template>
  <div class="admin-assessment">
      <div class="admin-assessment-sidebar">
        <AdminSidebar :toggleComposeBorder="toggleComposeBorder" />
      </div>
      <div class="admin-assessment-content">
        <AssessmentQuestions />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminSidebar from '@/components/AdminSidebar.vue';
import AssessmentQuestions from '@/components/AssessmentQuestions.vue';

export default {
  name: 'ComposeAssessment',
  data() {
    return {
      toggleComposeBorder: false,
    };
  },
  components: {
    AdminSidebar,
    AssessmentQuestions,
  },
  mounted() {
    this.toggleComposeBorder = true;
  },
};
</script>

<style scoped>
  .admin-assessment {
    display: flex;
    width: 100%;
    align-items: stretch;
  }
  .admin-assessment-sidebar {
    width: 30%;
  }
  .admin-assessment-content {
    width: 70%;
    padding-right: 90px;
    box-sizing: border-box;
  }
</style>
