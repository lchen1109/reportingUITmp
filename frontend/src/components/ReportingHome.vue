<template>
  <div class="hello">
    <h1>{{ hellomsg }}</h1>
    <h2>See the sources here: </h2>

    <h3>This site contains more stuff :)</h3>
    <ul>
        <li><router-link to="/reporting">/protected</router-link></li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'ReportingHome',
  props: {
    hellomsg: {
      type: String,
      required: true }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
