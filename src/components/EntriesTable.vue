<template>
  <div class="container">
    <div class="title d-flex">
        <span pt-5 pl-5>Entries - Batch 2</span>
        <div class="image"><img src="../assets/arrow-down-icon.svg" alt="arrow"></div>
    </div>
    <span class="description">Comprises of all that applied for Batch 2</span>
    <b-table
      :items="items"
      :fields="fields"
      head-variant="dark"
      table-variant="light"
      :borderless="true"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >
    <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected" >
          <b-button @click="modalShow = !modalShow">Show details</b-button>
          <b-modal v-model="modalShow" class="modal-container">
            <EntriesModal />
          </b-modal>
        </template>
      </template>
    </b-table>
  </div>
</template>

<script>
import EntriesModal from '@/components/EntriesModal.vue';

export default {
  name: 'EntriesTable',
  components: {
    EntriesModal,
  },
  data() {
    return {
      fields: [
        {
          key: 'name',
          sortable: false,
        },
        {
          key: 'email',
          sortable: false,
        },
        {
          key: 'dob',
          label: 'DOB - Age',
          sortable: true,
        },
        {
          key: 'course',
          sortable: false,
        },
        {
          key: 'university',
          sortable: false,
        },
        {
          key: 'cgpa',
          label: 'CGPA',
          sortable: true,
        },
        {
          key: 'status',
          label: 'Application Status',
          sortable: false,
        },
        {
          key: 'selected',
          sortable: false,
        },
      ],
      items: [
        {
          name: 'Ify Chinke',
          email: 'ify@enyata.com',
          dob: '12/09/19 - 23',
          address: '3, Sabo Ave, Yaba Lagos',
          university: 'University of Nigeria',
          cgpa: 4.0,
          status: 'pending',
        },
        {
          name: 'Ify Chinke',
          email: 'ify@enyata.com',
          dob: '12/09/19 - 22',
          address: '3, Sabo Ave, Yaba Lagos',
          university: 'University of Nigeria',
          cgpa: 5.0,
          status: 'approved',
        },
        {
          name: 'Ify Chinke',
          email: 'ify@enyata.com',
          dob: '12/09/19 - 22',
          address: '3, Sabo Ave, Yaba Lagos',
          university: 'University of Nigeria',
          cgpa: 5.0,
          status: 'pending',
        },
      ],
      modes: ['single'],
      selectMode: 'single',
      modalShow: false,
      approveApplication: false,
      declineApplication: false,
    };
  },
  methods: {
    onRowSelected(items) {
      this.selected = items;
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
  },
};
</script>

<style scoped>
/* .container {
    margin-right: 42px;
} */
.title {
  width: 350px;
  height: 53px;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-top: 30px;
}
.description {
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    text-align: left;
    color: var(--text-secondary-small);
}
.container table {
  margin-top: 100px;
  text-align: center;
}
.entry-details {
  width: 600px;
  height: 100vh;
  margin: 0 50px;
}
</style>
