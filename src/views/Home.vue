<template>
  <div class="home">
    <Banner :data="bannerData"/>
    <Category @scrollToElement="scrollToElement"/>
    <BuyMedicineOnline/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/views/home_components/Banner'
import BuyMedicineOnline from '@/views/home_components/BuyMedicineOnline'
import Category from '@/views/home_components/Category_thumb'
import { GetBanner } from '@/service/banner.service'
export default {
  name: 'Home',
  components: {
    Banner,
    Category,
    BuyMedicineOnline
  },
  data () {
    return {
      bannerData: null
    }
  },
  beforeRouteEnter (to, from, next) {
    GetBanner().then(res => {
      to.meta.data = res.data
      next()
    }).catch(error => {
      console.log(error)
    })
  },
  created () {
    this.bannerData = this.$route.meta.data
  },
  methods: {
    scrollToElement (e) {
      const eleHeight = this.$refs[e]
      const top = eleHeight.offsetTop - 80
      console.log(eleHeight)
      console.log(top)
      console.log(e)
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
  @media screen and (max-width: 500px) {
    padding-top: 130px;
  }
}
</style>
