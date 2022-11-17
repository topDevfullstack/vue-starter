<template>
  <div class="contact">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data, index) in products" :key="index">
        <h3 @click="goTodetail(data.productId)">{{ data.productTitle }}</h3>
        <img :src="data.image" class="img-fluid">
        <h4>{{ data.productPrice }}</h4>
      </div>
    </div>
    <hr />
    <router-link class="nav-link" to="/">
      <button type="button" class="btn btn-primary">Return Home Page</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact',
      products: [
        {
          productTitle: 'ABCN',
          image: require('../assets/logo.png'),
          productPrice: '100$',
          productId: 1
        },
        {
          productTitle: 'KARMA',
          image: require('../assets/logo.png'),
          productPrice: '100$',
          productId: 2
        },
        {
          productTitle: 'Tino',
          image: require('../assets/logo.png'),
          productPrice: '100$',
          productId: 3
        }
      ]
    }
  },
  methods: {
    goTodetail (prodId) {
      this.$router.push({ name: 'details', params: { Pid: prodId } })
    }
  }
}
</script>
