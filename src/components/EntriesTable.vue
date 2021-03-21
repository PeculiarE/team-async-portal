<template>
    <div class="wrapper">
        <table>
            <tr id="table-head">
                <td>Name</td>
                <th>Email</th>
                <th>DOB-Age</th>
                <th>Address</th>
                <th>University</th>
                <th>CGPA</th>
                <th>Status</th>
            </tr>

            <tr>
                <td>Ify Chinke</td>
                <td>ify@enyata.com</td>
                <td>12/09/19-22</td>
                <td>3, Sabo Ave, Yaba Lagos</td>
                <td>University of Nigeria</td>
                <td>5.0</td>
                <td>Pending</td>
            </tr>

            <tr>
                <td>Ify Chinke</td>
                <td>ify@enyata.com</td>
                <td>12/09/19-22</td>
                <td>3, Sabo Ave, Yaba Lagos</td>
                <td>University of Nigeria</td>
                <td>5.0</td>
                <td>Approved</td>
            </tr>

            <tr>
                <td>Ify Chinke</td>
                <td>ify@enyata.com</td>
                <td>12/09/19-22</td>
                <td>3, Sabo Ave, Yaba Lagos</td>
                <td>University of Nigeria</td>
                <td>5.0</td>
                <td>Pending</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'EntriesTable',
};
</script>

<style scoped>
#table-head {
    width: 1042px;
    height: 46px;
    background: #2B3C4E;
    color: white;
    margin: 0 64px 0 42px;
}
</style>
