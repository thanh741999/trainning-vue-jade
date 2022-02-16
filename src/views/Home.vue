<template>
  <div class="home">
    <Banner :data="banner"/>
    <Category @scrollToElement="scrollToElement"/>
    <BuyMedicineOnline/>
    <HotSale :data="HotSale"/>
    <FeatureProduct/>
    <!--  List Category  -->
    <ProductCategory ref="medicine" :Category="Category1"/>
    <ProductCategory ref="food" :Category="Category2"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/views/home_components/Banner'
import BuyMedicineOnline from '@/views/home_components/BuyMedicineOnline'
import Category from '@/views/home_components/Category_thumb'
import HotSale from '@/views/home_components/HotSale'
import FeatureProduct from '@/views/home_components/FeatureProduct'
import ProductCategory from '@/views/home_components/ProductCategory'
import store from '@/store'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Banner,
    Category,
    BuyMedicineOnline,
    FeatureProduct,
    HotSale,
    ProductCategory
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('home/setHotSale').then(_ => {
      store.dispatch('banner/setBanner')
    }).then(_ => {
      const data = [1, 2]
      store.dispatch('home/setCategoryProduct', data)
      next()
    }).catch((error) => {
      console.log(error)
    })
  },
  computed: {
    ...mapState('banner', ['banner']),
    ...mapState('home', ['Category1', 'HotSale', 'Category2'])
  },
  methods: {
    scrollToElement (e) {
      const eleHeight = this.$refs[e].$el
      const top = eleHeight.offsetTop - 80
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.home {
  background: #EBEBEB;
  padding-bottom: 40px;
  @media screen and (max-width: 500px) {
    padding-top: 115px;
  }

}
</style>
