<template>
  <div class="container Home">
    <h1>Home</h1>
    <div class="row">
      <div class="col-md-6 col-lg-6" v-for="(data, index) in $store.state.categories" :key="index">
        <button type="button" class="btn btn-primary" @click="goTocategory(data.categoryId)">{{ data.categoryTitle
        }}</button>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-4 col-lg-4" v-for="(data, index) in $store.state.products" :key="index">
        <h3 @click="goTodetail(data.productId)">{{ data.productTitle }}</h3>
        <img :src="data.image" class="img-fluid">
        <h4>{{ data.productPrice }}$</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Home'
    }
  },
  methods: {
    goTodetail (prodId) {
      this.$router.push({ name: 'details', params: { Pid: prodId } })
    },
    goTocategory (cateId) {
      this.$router.push({ name: 'category', params: { Cid: cateId } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
