<template>
  <div class="home">
    <img alt="Vue with Spring logo" src="../assets/spring-boot-vuejs-logo.png">
    <ReportingHome hellomsg="Welcome to your Vue.js (+ TypeScript) powered Spring Boot App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloSpringWorld from '@/components/HelloSpringWorld.vue'; // @ is an alias to /src
import ReportingHome from '@/components/ReportingHome.vue'; // @ is an alias to /src
export default defineComponent({
  name: 'Home',
  components: {
    // HelloSpringWorld,
    ReportingHome,
  },
});
</script>
