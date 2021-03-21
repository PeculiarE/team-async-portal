<template>
    <div class="wrapper">
        <div class="aside">
            <AdminSidebar />
        </div>
        <div class="contents">
            <div class="heading">Dashboard</div>
            <div class="stats">
                <div class="current">
                    <p class="title">Current Application</p>
                    <span class="figure">233</span>
                    <span class="line"></span>
                    <p class="title2">Academy 2.0</p>
                </div>
                <div class="total"></div>
                <div class="batches"></div>
            </div>

            <div class="inner-wrapper">
                <div class="history">
                    <div class="texts">
                        <span>History</span><br>
                        <span>Last update 18:24, 22/02/19</span>
                    </div>
                    <div class="history-component">
                        <ApplicationHistory />
                    </div>
                </div>
                <div class="create-assessment">
                    <CreateAssessment />
                </div>
        </div>
        </div>
    </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue';
import ApplicationHistory from '@/components/ApplicationHistory.vue';
import CreateAssessment from '@/components/CreateAssessment.vue';

export default {
  name: 'AdminDashboard',
  components: {
    AdminSidebar,
    ApplicationHistory,
    CreateAssessment,
  },
};
</script>

<style scoped>
.wrapper {
    height: 100vh;
    width: 1440px;
    box-sizing: border-box;
    display: flex;
}
.aside {
    height: 100%;
    width: 20.28%
}
.contents {
    height: 100%;
    width: 79.72%;
    padding-left: 56px;
}
.heading {
    width: 197px;
    height: 52.72px;
    margin: 107px 0 65.28px 47px;
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    }
.current {
    width: 129px;
    height: 100px;
    box-sizing: border-box;
    border: 2px solid red;
    margin-left: 56px;
}
.title {
    font-family: Nunito Sans;
    /* font-style: normal;
    font-weight: normal; */
    font-size: 14px;
    line-height: 19px;
    /* text-align: center; */
    color: #4F4F4F;
}
.figure {
    /* width: 87px;
    height: 66px; */
    font-family: Nunito Sans;
    /* font-style: normal;
    font-weight: 300; */
    font-size: 48px;
    line-height: 65px;
    color: #2B3C4E;
}
.line {
    width: 148px;
    height: 4px;
    background: #006DF0;
    border-radius: 4px;
}
.title2 {
    width: 71px;
    height: 17px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #4F4F4F;
}
.inner-wrapper {
    display: flex;
}
.create-assessment {
    width: 482px;
    height: 307px;
    border: 1px solid #ECECF9;
    box-sizing: border-box;
    border-radius: 4px;
}
</style>
