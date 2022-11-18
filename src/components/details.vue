<template>
  <div class="details">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="row">
        <div class="col-md-12" v-for="(product, index) in products" :key="index">
          <div v-if="proId == product.productId">
            <h1>{{ product.productTitle }}</h1>
            <img :src="product.image" class="img-fluid">
            <h2>{{ product.productPrice }}$</h2>
            <div v-if="hideDetail == false">
              <div id="detail-info">This product is very quality.</div>
            </div>
            <hr />
            <button type="button" class="col-md-2  offset-1 btn btn-primary" @click="hideDetail = !hideDetail">Detail Info</button>
            <button type="button" class="col-md-2 offset-6 btn btn-primary" @click="$router.push('/')">Return Home Page</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      hideDetail: true,
      proId: this.$route.params.Pid,
      title: 'Details',
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
  }
}
</script>
