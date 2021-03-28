<template>
  <div class="admin-history">
      <div class="admin-history-sidebar">
        <AdminSidebar :toggleHistoryBorder="toggleHistoryBorder" />
      </div>
      <div class="admin-history-content">
        <HistoryTable />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminSidebar from '@/components/AdminSidebar.vue';
import HistoryTable from '@/components/HistoryTable.vue';

export default {
  name: 'AssessmentHistory',
  data() {
    return {
      toggleHistoryBorder: false,
    };
  },
  components: {
    AdminSidebar,
    HistoryTable,
  },
  mounted() {
    this.toggleHistoryBorder = true;
  },
};
</script>

<style scoped>
  .admin-history {
    display: flex;
    width: 100%;
    align-items: stretch;
  }
  .admin-history-sidebar {
    width: 30%;
  }
  .admin-history-content {
    width: 70%;
    padding-right: 90px;
    box-sizing: border-box;
  }
</style>
