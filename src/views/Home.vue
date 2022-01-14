<template>
  <div class="home">
    <Banner :data="bannerData"/>
    <BuyMedicineOnline/>
    <HelloWorld/>
    <HelloWorld></HelloWorld>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import Banner from '@/views/home_components/Banner'
import BuyMedicineOnline from '@/views/home_components/BuyMedicineOnline'
import { GetBanner } from '@/service/banner.service'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Banner,
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
