<template>
  <div class="category">
    <h1>{{ title }}</h1>
    <hr />
    <router-link class="nav-link" to="/">
      <button type="button" class="btn btn-primary">Return Home Page</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'category',
  data () {
    return {
      title: 'Category'
    }
  }
}
</script>