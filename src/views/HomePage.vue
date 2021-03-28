<template>
    <div class="home-wrapper">
        <Home />
    </div>
</template>

<script>
import Home from '@/components/Home.vue';

export default {
  name: 'HomePage',
  components: {
    Home,
  },
};
</script>

<style scoped>
.home-wrapper {
    max-height: 900px;
}
</style>
