<template>
  <div class="assessment-results mt-5">
    <div class="d-flex">
       <h1 class="mr-3">Results - Batch 2</h1>
       <img src="../assets/arrow-down-icon.svg" alt="arrow">
    </div>
    <i>Comprises of all that applied for Batch 2</i>
    <b-table
      id="assessment-results-table"
      :borderless="true"
      :items="items"
      :fields="fields"
      head-variant="dark"
    ></b-table>
  </div>
</template>

<script>
export default {
  name: 'ResultsTable',
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name',
          sortable: false,
        },
        {
          key: 'email',
          label: 'Email',
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
          key: 'scores',
          label: 'Test Scores',
          sortable: true,
        },
      ],
      items: [
        {
          name: 'Ruqayaah Sabitu',
          email: 'sabitu@gmail.com',
          dob: '12/09/19 - 22',
          address: 'Lagos, Nigeria',
          university: 'OAU',
          cgpa: 4.99,
          scores: 19,
        },
        // {
        //   name: 'Mercy Chinwo',
        //   email: 'mchinwo@yahoo.com',
        //   dob: '25/11/18 - 23',
        //   address: '17, Kushimo Street, Oshodi, Lagos',
        //   university: 'University of Lagos',
        //   cgpa: 4.2,
        //   scores: 25,
        // },
      ],
    };
  },
};
</script>

<style scoped>
.assessment-results h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.assessment-results i {
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #4F4F4F;
}
#assessment-results-table {
  margin-top: 50px;
  text-align: center;
}
</style>
