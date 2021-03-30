<template>
  <div class='wrapper'>
    <div>
      <AdminSidebar :toggleEntriesBorder="toggleEntriesBorder" />
    </div>
    <div>
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
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  /* box-sizing: border-box; */
  /* align-items: ; */
}
.aside {
  width: 25%;
}
</style>
