<template>
  <div class="Home">
    <h1>Home</h1>
    <div class="row">
      <div class="col-md-6 col-lg6" v-for="(data, index) in categories" :key="index">
        <router-link class="nav-link" to="/blog">
          <button type="button" class="btn btn-primary">{{ data.categoryTitle }}</button>
        </router-link>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data, index) in products" :key="index">
        <h3 @click="goTodetail(data.productId)">{{ data.productTitle }}</h3>
        <img :src="data.image" class="img-fluid">
        <h4>{{ data.productPrice }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Home',
      categories: [
        {
          categoryTitle: "Battery",
          categoryId: 1
        },
        {
          categoryTitle: "Parts",
          categoryId: 2
        }
      ],
      products: [
        {
          productTitle: "ABCN",
          image: require('../assets/logo.png'),
          productPrice: "100$",
          productId: 1
        },
        {
          productTitle: "KARMA",
          image: require('../assets/logo.png'),
          productPrice: "100$",
          productId: 2
        },
        {
          productTitle: "Tino",
          image: require('../assets/logo.png'),
          productPrice: "100$",
          productId: 3
        }
      ]
    }
  },
  methods: {
    goTodetail(prodId) {
      this.$router.push({ name: 'details', params: { Pid: prodId } })
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

button {
  background-color: rgb(20, 131, 235);
}
</style>
