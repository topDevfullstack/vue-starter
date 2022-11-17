<template>
  <div class="Home">
    <div class="home">
    <h1>Home</h1>
    <button type="button" class="btn btn-primary">Battery</button>
    <button type="button" class="btn btn-primary">Parts</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
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
button {
  background-color: rgb(20, 131, 235);
}
</style>
