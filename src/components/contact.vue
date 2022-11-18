<template>
  <div class="contact">
    <h1>{{ title }}</h1>
    <h5>{{ totalCount }}Counts <span>,</span> TotalAmount: {{ totalAmount }}$</h5>
    <div class="row">
      <div class="col-md-4 col-lg-4" v-for="(data, index) in products" :key="index">
        <h3 @click="goTodetail(data.productId)">{{ data.productTitle }}</h3>
        <img :src="data.image" class="img-fluid">
        <h4>{{ data.productPrice }}$</h4>
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
      totalCount: 0,
      totalAmount: 0,
      title: 'Contact',
      products: [
        {
          productTitle: 'ABCN',
          image: require('../assets/logo.png'),
          productPrice: 100,
          productId: 1
        },
        {
          productTitle: 'KARMA',
          image: require('../assets/logo.png'),
          productPrice: 200,
          productId: 2
        },
        {
          productTitle: 'Tino',
          image: require('../assets/logo.png'),
          productPrice: 300,
          productId: 3
        }
      ]
    }
  },
  methods: {
    goTodetail (prodId) {
      this.$router.push({ name: 'details', params: { Pid: prodId } })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // do stuff with the DOM
      this.totalCount = this.products.length
      this.products.forEach(product => {
        this.totalAmount += product.productPrice
      })
    })
  }
}
</script>
