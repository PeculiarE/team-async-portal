<template>
  <div class="assessment-history mt-5">
    <h1>Assessment History</h1>
    <b-table
      id="assessment-history-table"
      :borderless="true"
      :items="items"
      :fields="fields"
      head-variant="dark"
    ></b-table>
  </div>
</template>

<script>
export default {
  name: 'HistoryTable',
  data() {
    return {
      fields: [
        {
          key: 'batch',
          label: 'Batch',
        },
        {
          key: 'date',
          label: 'Date Composed',
        },
        {
          key: 'questions',
          label: 'No of Questions',
        },
        {
          key: 'time',
          label: 'Time Allocated',
        },
        {
          key: 'status',
          label: 'Status',
        },
      ],
      items: [
        {
          batch: 'Batch 1',
          date: '12/07/94',
          questions: 30,
          time: '30 mins',
          status: 'Taken',
        },
        {
          batch: 'Batch 2',
          date: '12/07/95',
          questions: 30,
          time: '30 mins',
          status: 'Taken',
        },
      ],
    };
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
