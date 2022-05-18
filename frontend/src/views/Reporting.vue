<template>
  <div class="service">
    <h1>{{ msg }}</h1>
    <h2>Reporting vue header</h2>

    <button @click="callReportingApi()">Click to call reporting service backend api</button>

    <h4>Backend response: {{ backendResponse }}</h4>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import api from "../api/backend-api";
import {AxiosError} from "axios";
//import BarChart from '../src/components/BarChart.vue'

interface State {
  msg: string;
  backendResponse: string;
  errors: AxiosError[]
}

export default defineComponent({
  name: 'Reporting',

  //components: { BarChart },

  data: (): State => {
    return {
      msg: 'Home Page for Reporting REST-Services:',
      backendResponse: '',
      errors: []
    }
  },
  methods: {

    // Fetches posts when the component is created.
    callReportingApi () {
      api.reportingApiCall().then(response => {
          this.backendResponse = response.data;
          console.log(response.data)
      })
      .catch((error: AxiosError) => {
        this.errors.push(error)
      })
    }
  }
});
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

