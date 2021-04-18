<template>
  <div class="assessment-history mt-5">
    <h1>Assessment History</h1>
    <b-table
      id="assessment-history-table"
      :borderless="true"
      :items="this.getAssessmentHistory"
      :fields="fields"
      head-variant="dark"
    ></b-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HistoryTable',
  data() {
    return {
      fields: [
        {
          key: 'batch_id',
          label: 'Batch',
        },
        {
          key: 'created_at',
          label: 'Date Composed',
        },
        {
          key: 'date_of_expiration',
          label: 'Test Expiration Date',
        },
        {
          key: 'total_questions',
          label: 'No of Questions',
        },
        {
          key: 'total_time',
          label: 'Time Allocated',
        },
        {
          key: 'status',
          label: 'Status',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['getAssessmentHistory']),
  },
  methods: {
    ...mapActions(['retrieveAssessmentHistory']),
  },

  mounted() {
    this.retrieveAssessmentHistory();
  },
};
</script>

<style scoped>
.assessment-history h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
#assessment-history-table {
  margin-top: 50px;
  text-align: center;
}
</style>
