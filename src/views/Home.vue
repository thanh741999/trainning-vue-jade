<template>
  <div class="home">
    <Banner/>
    <Category @scrollToElement="scrollToElement"/>
    <BuyMedicineOnline/>
    <HotSale :data="ProductData"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/views/home_components/Banner'
import BuyMedicineOnline from '@/views/home_components/BuyMedicineOnline'
import Category from '@/views/home_components/Category_thumb'
import HotSale from '@/views/home_components/HotSale'
import { GetProduct } from '@/service/HomeService/home.service'
export default {
  name: 'Home',
  components: {
    Banner,
    Category,
    BuyMedicineOnline,
    HotSale
  },
  data () {
    return {
      ProductData: null
    }
  },
  beforeRouteEnter (to, from, next) {
    GetProduct().then(res => {
      to.meta.data = res.data
      next()
    }).catch((error) => {
      console.log(error)
    })
  },
  created () {
    this.ProductData = this.$route.meta.data
  },
  methods: {
    scrollToElement (e) {
      const eleHeight = this.$refs[e]
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
  @media screen and (max-width: 500px) {
    padding-top: 130px;
  }
}
</style>
