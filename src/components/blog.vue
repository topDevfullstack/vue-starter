<template>
  <div class="blog">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data, index) in products" :key="index">
        <h3>{{ data.productTitle }}</h3>
        <img :src="data.image" class="img-fluid">
        <h4>{{ data.productPrice }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'blog',
  data() {
    return {
      title: 'Blog',
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
<style scoped>

</style>