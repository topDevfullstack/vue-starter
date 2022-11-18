import { createStore } from 'vuex'

export default createStore({
  state: {
    categories: [
      {
        categoryTitle: 'Battery',
        categoryId: 1
      },
      {
        categoryTitle: 'Parts',
        categoryId: 2
      }
    ],
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
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})
