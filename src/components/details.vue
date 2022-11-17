<template>
  <div class="details">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="row">
        <div class="col-md-12" v-for="(product, index) in products" :key="index">
          <div v-if="proId == product.productId">
            <h1>{{ product.productTitle }}</h1>
            <img :src="product.image" class="img-fluid">
            <h2>{{ product.productPrice }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'details',
  data() {
    return {
      proId: this.$route.params.Pid,
      title: "Details",
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
  }
}
</script>