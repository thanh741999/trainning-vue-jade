<template>
  <div class="product container">
    <div class="product__header">
      <img src="@/assets/img/product_star2x.png" alt="star">
      <div class="header__title">
        <h4>Sản Phẩm Nổi Bật</h4>
        <p>Lorem ipsum, or lipsum as it is sometimes known</p>
      </div>
    </div>
    <div class="product__content">
      <VueSlickCarousel v-bind="slickOptions">
        <div class="item" v-for="(item,index) in FeatureProduct" :key="index">
          <img :src="item.images[0].url" alt="">
        </div>
      </VueSlickCarousel>
      <div class="content__right">
        <img src="@/assets/img/product__right2x.png" alt="advertise">
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'FeatureProduct',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      FeatureProduct: [],
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        centerPadding: '25px',
        dotsClass: 'slick-dots custom-dot-class',
        autoplaySpeed: 2000,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              centerPadding: '40px',
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
      default: null
    }
  },
  created () {
    this.data.forEach((item) => {
      if (item.feature && this.FeatureProduct.length <= 7) {
        this.FeatureProduct.push(item)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.product {
  background-color: #ffffff;
  padding: 0;
  &__header {
    display: flex;
    align-items: center;
    padding: 20px;
    @media screen and (max-width: 768px) {
      padding: 15px;
    }
    .header__title {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 10px;

      h4 {
        color: #505050;
        font-size: 22px;
        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
        @media screen and (max-width: 500px) {
          font-size: 16px;
        }
      }

      p {
        font-size: 18px;
        color: #777777;
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
        @media screen and (max-width: 500px) {
          font-size: 11px;
        }
      }
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    position: relative;

    .slick-slider.slick-initialized {
      width: 70%;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 500px) {
        width: 50%;
      }
      .item {
        img {
          width: 100%;
          height: 259px;
          object-fit: contain;
          @media screen and (max-width: 768px) {
            height: 183px;
          }
          @media screen and (max-width: 500px) {
            height: 144px;
          }
          @media screen and (max-width: 380px) {
            height: 105px;
          }
        }
      }
    }

    .content__right {
      width: 30%;
      padding-left: 10px;
      @media screen and (max-width: 500px) {
        width: 50%;
        padding-left: 0;
      }

      img {
        width: 100%;
      }
    }
  }
}

</style>
