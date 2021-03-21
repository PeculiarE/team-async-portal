<template>
  <div class="admin-results">
      <div class="admin-results-sidebar">
        <AdminSidebar />
      </div>
      <div class="admin-results-content">
        <ResultsTable />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminSidebar from '@/components/AdminSidebar.vue';
import ResultsTable from '@/components/ResultsTable.vue';

export default {
  name: 'AssessmentHistory',
  components: {
    AdminSidebar,
    ResultsTable,
  },
};
</script>

<style scoped>
  .admin-results {
    display: flex;
    width: 100%;
    align-items: stretch;
  }
  .admin-results-sidebar {
    width: 27%;
  }
  .admin-results-content {
    width: 73%;
    padding-right: 50px;
    box-sizing: border-box;
  }
</style>
