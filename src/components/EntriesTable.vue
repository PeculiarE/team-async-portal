<template>
  <div class="wrapper">
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
    ></b-table>
  </div>
</template>

<script>
export default {
  name: 'EntriesTable',
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
          key: 'status',
          label: 'Application Status',
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
    };
  },
};
</script>

<style scoped>
.wrapper {
    padding-right: 1.5rem;
}
.title {
  width: 299px;
  height: 53px;
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin: 101px 0 55px 42px;
}
.description {
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    text-align: left;
    color: var(--text-secondary-small);
}
.wrapper table {
  margin-top: 50px;
  text-align: center;
}
</style>
