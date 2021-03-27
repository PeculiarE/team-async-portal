<template>
    <div class="wrapper">
        <div class="aside">
            <AdminSidebar :toggleEntriesBorder="toggleEntriesBorder" />
        </div>
        <div class="contents">
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
    /* box-sizing: border-box; */
    display: flex;
    align-items: stretch;
}
.aside {
    width: 25%;
}
.contents {
    width: 75%;
    box-sizing: border-box;
    margin: 0 30px;

}
</style>
