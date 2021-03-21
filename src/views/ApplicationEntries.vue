<template>
    <div class="wrapper">
        <div class="aside">
        <AdminSidebar />
        </div>
        <div class="contents">
            <div class="title">
                <span class="name">Entries - Batch 2 v</span><br>
                <span class="description">Comprises of all that applied for batch 2</span>
            </div>
            <div class="table">
            <EntriesTable />
            </div>
        </div>
    </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue';
import EntriesTable from '@/components/EntriesTable.vue';

export default {
  name: 'ApplicationEntries',
  components: {
    AdminSidebar,
    EntriesTable,
  },
};
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
}
.aside {
    width: 20.28%;
    height: 100%;
}
.contents {
    width: 79.72%;
    height: 100%;
    box-sizing: border-box;

}
.title {
    margin: 101px 0 55px 42px;
    text-align: left;
    font-weight: 300;
}
.name {
    width: 299px;
    height: 53px;
    font-style: normal;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
}
.description {
    /* width: 216px; */
    height: 16px;
    font-style: italic;
    font-size: 13px;
    line-height: 16px;
}
</style>
