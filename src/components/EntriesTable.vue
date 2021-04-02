<template>
  <div class="entries-container">
    <div class="title d-flex">
        <span pt-5 pl-5>Entries - Batch 1</span>
        <div class="image"><img src="../assets/arrow-down-icon.svg" alt="arrow"></div>
    </div>
    <span class="description">Comprises of all that applied for Batch 1</span>
    <b-table
      id="entries-table"
      :items="getAllUsers"
      :fields="fields"
      head-variant="dark"
      table-variant="light"
      :borderless="true"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-clicked="(item, index, event) => onRowSelected(item, index, event)"
      v-if="dontShowModal"
    >
    </b-table>
    <div v-else>
      <EntriesModal @closeModal="closeModal" :data="data" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
          key: 'full_name',
          label: 'Name',
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
          key: 'address',
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
          key: 'approval_status',
          label: 'Status',
          sortable: false,
        },
      ],
      data: [],
      modes: ['single'],
      selectMode: 'single',
      modalShow: false,
      approveApplication: false,
      declineApplication: false,
      dontShowModal: true,
    };
  },
  computed: {
    ...mapGetters(['getAllUsers']),
  },
  methods: {
    ...mapActions(['populateAllUsers']),
    onRowSelected(item) {
      this.dontShowModal = false;
      this.data = item;
      console.log(item);
    },
    closeModal() {
      this.dontShowModal = true;
    },
  },
  mounted() {
    this.populateAllUsers();
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
  margin-top: 50px;
}
.description {
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    text-align: left;
    color: var(--text-secondary-small);
    margin-bottom: 50px;
}
.entries-table {
  height: 100%;
}
.entries-table tbody {
  font-size: 5px;
}
.entries-container table {
  margin-top: 100px;
  text-align: center;
}
/* .entry-details {
  width: 600px;
  height: 100vh;
  margin: 0 50px;
} */
#entries-table {
  margin-top: 100px;
}
</style>
