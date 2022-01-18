<template>
  <div class="hot container" v-if="discountProduct">
    <div class="hot__header">
      <div class="header__title">
        <img src="@/assets/img/hot-icon-fire.png" alt="fire">
        <span>Khuyến Mãi Hot</span>
      </div>
      <a class="header__more">
        Xem tất cả
        <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
      </a>
    </div>
    <VueSlickCarousel class="hot-sale" v-bind="slickOptions">
      <div class="item" v-for="(item,index) in discountProduct" :key="index">
        <img :src="item.images[0].url" alt="">
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import { ChevronRightIcon } from 'vue-feather-icons'
export default {
  name: 'HotSale',
  components: {
    VueSlickCarousel,
    ChevronRightIcon
  },
  data () {
    return {
      discountProduct: [],
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        dotsClass: 'slick-dots custom-dot-class',
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              centerPadding: '80px'
            }
          },
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {}
    }
  },
  created () {
    this.data.forEach((item) => {
      if (item.discount !== 'No' && this.discountProduct.length <= 8) {
        this.discountProduct.push(item)
      }
    })
  }

}
</script>

<style lang="scss" scoped>
.hot {
  background-color: #ffffff;
  padding: 0;
  margin-bottom: 25px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    @media screen and (max-width: 768px) {
      padding: 15px;
    }
    @media screen and (max-width: 500px) {
      padding: 15px 10px;
    }
    .header__title {
      display: flex;
      align-items: center;

      img {
        height: 40px;
        @media screen and (max-width: 500px) {
          height: 30px;
        }
      }

      span {
        font-size: 22px;
        font-weight: bold;
        color: #505050;
        margin-left: 10px;
        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
        @media screen and (max-width: 500px) {
          font-size: 16px;
        }
      }
    }
    .header__more {
      color: #01ADAB;
      font-size: 18px;
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
      @media screen and (max-width: 500px) {
        font-size: 13px;
      }
      &:hover {
        color: #01ADAB;
        opacity: .8;
        cursor: pointer;
      }
      svg {
        color: #01ADAB;
      }
    }
  }
  .slick-slider.slick-initialized {
    padding-bottom: 20px;
  }
  .item {
    img {
      width: 100%;
      height: 299px;
      object-fit: contain;
      @media screen and (max-width: 768px) {
        height: 261px;
      }
      @media screen and (max-width: 500px) {
        height: 225px;
      }
    }
  }
}

</style>
