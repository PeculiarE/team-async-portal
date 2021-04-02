<template>
  <div class='admin-entries'>
    <div class="admin-entries-sidebar">
      <AdminSidebar :toggleEntriesBorder="toggleEntriesBorder" />
    </div>
    <div class="admin-entries-content">
      <EntriesTable />
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue';
import EntriesTable from '@/components/EntriesTable.vue';

export default {
  name: 'ApplicationEntries',
  data() {
    return {
      toggleEntriesBorder: false,
    };
  },
  components: {
    AdminSidebar,
    EntriesTable,
  },
  mounted() {
    this.toggleEntriesBorder = true;
  },
};
</script>

<style scoped>
.admin-entries {
  display: flex;
  width: 100%;
  /* align-items: stretch; */
}
.admin-entries-sidebar {
  width: 30%;
}
.admin-entries-content {
  height: 750px;
  padding-right: 30px;
  box-sizing: border-box;
}
</style>
