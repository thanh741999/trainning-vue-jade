<template>
  <div class="banner">
    <div class="container banner-content">
      <VueSlickCarousel v-if="data" v-bind="slickOptions">
        <div class="item" v-for="(item,index) in data" :key="index">
          <img :src="item.image.url" alt="">
        </div>
      </VueSlickCarousel>
      <div class="banner-content-right">
        <div class="item">
          <img src="@/assets/img/banner_icon1-2x.png" alt="banner">
          <p>Dược sĩ <br>tư vấn</p>
        </div>
        <div class="item">
          <img src="@/assets/img/banner_icon2-2x.png" alt="banner">
          <p>Sản phẩm<br>
            chính hãng</p>
        </div>
        <div class="item">
          <img src="@/assets/img/banner_icon3-2x.png" alt="banner">
          <p>Giao hàng<br>
            toàn quốc</p>
        </div>
        <div class="item">
          <img src="@/assets/img/banner_icon4-2x.png" alt="banner">
          <p>Tích lũy<br>
            đổi quà</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import { GetBanner } from '@/service/HomeService/home.service'

export default {
  name: 'Banner',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      data: null,
      slickOptions: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      }
    }
  },
  mounted () {
    this.GetProduct()
  },
  methods: {
    GetProduct () {
      GetBanner().then(res => {
        this.data = res.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  background-color: #FFFFFF;
  padding: 15px 0;
  &-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    .slick-slider.slick-initialized {
      width: 70%;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 15px;
      }

      .item {
        border-radius: 25px;
        img {
          width: 850px;
          height: 300px;
          object-fit: cover;
          @media screen and (max-width: 768px) {
            width: 690px;
            height: 260px;
          }
          @media screen and (max-width: 500px) {
            width: 400px;
            height: 158px;
          }
          @media screen and (max-width: 320px) {
            width: 300px;
            height: 100px;
          }
        }
      }
    }

    &-right {
      width: calc((100% - 70%) - 20px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      @media screen and (max-width: 768px) {
        width: 100%;
      }

      .item {
        width: 50%;
        margin-bottom: 20px;
        @media screen and (max-width: 768px) {
          width: calc((100% / 4) - 20px);
        }
        @media screen and (max-width: 500px) {
          width: 50%;
        }

        p {
          margin-bottom: 0;
          font-size: 15px;
          @media screen and (max-width: 768px) {
            font-size: 13px;
          }
        }
      ;

        img {
          margin-bottom: 15px;
          @media screen and (max-width: 768px) {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
