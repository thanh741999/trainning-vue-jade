<template>
  <div class="medicine container" ref="medicine" v-if="Category">
    <div class="medicine__header">
      <div class="header__title">
        <img src="@/assets/img/thuoc-green2x.png" alt="thuoc">
        <span>{{ Category[0].category.name }}</span>
      </div>
      <router-link class="header__more" to="#">
        Xem tất cả
        <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
      </router-link>
    </div>
    <div class="medicine__content">
      <router-link tag="div" :to="{name: 'ProductDetail', params: {id: item.id}}" class="content__item" v-for="(item,index) in Category" :key="index">
        <div class="item__img">
          <div class="img__size">
            <img :src="item.images[0].url" alt="">
          </div>
          <img src="@/assets/img/ship2x.png" alt="ship" class="ship">
          <img src="@/assets/img/gift-green.png" alt="gift" class="gift">
        </div>
        <div class="item__info">
          <p class="line-clamp-2">{{item.name}}</p>
          <span v-if="item.discount !== 'No'">{{DiscountPrice(item.discount,item.price)}}đ</span>
          <span :class="[item.discount !== 'No'? 'old-price':'']">{{item.price}} đ</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons'
export default {
  name: 'ProductCategory',
  components: {
    ChevronRightIcon
  },
  props: {
    Category: {
      type: Array
    }
  },
  methods: {
    DiscountPrice (discount, price) {
      if (discount !== 'No') {
        const dis = discount.slice(0, -1)
        return price - ((price * dis) / 100)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.medicine {
  background-color: #ffffff;
  padding: 0;
  margin-bottom: 25px;

  &__header {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
      padding: 15px 10px;
    }
    .header__title {
      span {
        margin-left: 10px;
        color: #505050;
        font-size: 22px;
        font-weight: bold;
        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
        @media screen and (max-width: 500px) {
          font-size: 13px;
        }
      }
      img {
        @media screen and (max-width: 500px) {
          width: 20%;
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

  &__content {
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 390px) {
      flex-flow: row;
      overflow: scroll;
      width: 250px;
      margin: 0 auto;
      padding: 5px 0;
    }

    .content__item {
      width: calc(100% / 5);
      cursor: pointer;
      position: relative;
      padding: 40px 20px 20px;
      outline: 1px solid #E5E5E4;
      @media screen and (max-width: 1200px) {
        width: calc(100% / 4);
      }
      @media screen and (max-width: 1024px) {
        width: calc(100% / 3);
      }
      @media screen and (max-width: 580px) {
        width: calc(100% / 2);
      }
      @media screen and (max-width: 390px) {
        min-width: 250px;
        border: 2px solid #E5E5E4;
        margin-bottom: 20px;
      }

      &:last-child {
        border-right: unset;
        @media screen and (max-width: 1024px) {
          border-right: 1px solid #E5E5E4;
        }
        @media screen and (max-width: 500px) {
          border-right: unset;
        }
      }

      .item__img {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        .sale {
          position: absolute;
          top: 0;
          left: 10px;
        }

        .ship {
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .gift {
          position: absolute;
          top: 60px;
          right: 10px;
        }

        .img__size {
          height: 120px;

          img {
            height: 100%;
          }
        }
      }

      .item__info {
        text-align: left;
        margin-top: 15px;

        p {
          color: #020202;
          font-size: 16px;
        }

        span {
          display: block;
          color: #E42F43;
          font-size: 16px;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .old-price {
          color: #AAAAAA;
          font-size: 12px;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
