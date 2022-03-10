<template>
  <div id="product-detail">
      <div class="container cart">
        <div class="cart__img">
          <div class="img__main">
            <img :src="productDetail.images[0].url" alt="medicine4">
          </div>
          <ul class="img__list">
            <li><img :src="productDetail.images[0].url" alt="medicine4"></li>
            <li><img :src="productDetail.images[0].url" alt="medicine4"></li>
            <li><img :src="productDetail.images[0].url" alt="medicine4"></li>
          </ul>
        </div>
        <div class="cart__info">
          <div class="info__item info__top">
            <h2>{{productDetail.name}}</h2>
            <div class="top__group">
              <p class="group__band">Thương hiệu: <a>Blackmores</a></p>
              <p class="group__code">SKU: <span>TP002455</span></p>
            </div>
          </div>
          <div class="info__item info__description">
            <p>Trọng lượng: <span> 300 g</span></p>
            <p>Kích thước: <span> 15 x 15 x 15 cm</span></p>
            <p>Quy cách: <span> Chai 60 viên</span></p>
            <p>Xuất xứ: <span> USA</span></p>
          </div>
          <div class="info__item info__status">
            <p class="status__price">Giá: <b>{{productDetail.price}}</b></p>
            <p class="status__state">Tình trạng: <b>Còn Hàng</b></p>
            <div class="status__buy">
              <p>Số lượng</p>
              <div class="buy__quantity">
                <button class="minus" @click="changeQuantity(-1)" :disabled="product.quantity === 1"><minus-icon size="1.5x" class="custom-class minas"/></button>
                <input type="text" v-model="product.quantity">
                <button class="plus" @click="changeQuantity(1)"><plus-icon size="1.5x" class="custom-class plus"/></button>
              </div>
              <button class="buy__btn" @click="addToCart">
                <img src="../assets/img/cart2x.png" alt="cart">
                CHỌN MUA
              </button>
              <button v-if="productLike" ref="like" :id="displayLike !== -1 ? 1 : 0 " :class="displayLike !== -1 ? 'active' : ''" class="buy__like" @click="addLike(productDetail.id)">
                <heart-icon size="1.5x" class="custom-class"></heart-icon>
              </button>
            </div>
          </div>
          <div class="info__item info__tag">
            <p>Danh mục: <b>Chăm sóc cá nhân, Chăm sóc răng miệng</b></p>
            <p>tags: <b>#USA, #Backmore, #Solgar</b></p>
          </div>
        </div>
        <div class="cart__benefit">
          <h5>QUYỀN LỢI KHÁCH HÀNG</h5>
          <div class="benefit__content">
            <div class="content__item">
              <img src="../assets/img/control_page-1-2x.png" alt="percent">
              <span>Sản phẩm chính hãng</span>
            </div>
            <div class="content__item">
              <img src="../assets/img/control_page-1-2x.png" alt="express">
              <span>Giao hàng toàn quốc</span>
            </div>
            <div class="content__item">
              <img src="../assets/img/control_page-1-2x.png" alt="mobilephone">
              <span>Thanh toán linh hoạt</span>
            </div>
            <div class="content__item">
              <img src="../assets/img/control_page-1-2x.png" alt="gift">
              <span>Tích điểm đổi quà</span>
            </div>
            <div class="content__item">
              <img src="../assets/img/control_page-1-2x.png" alt="telephone">
              <span>Dược sĩ tư vấn</span>
            </div>
          </div>
        </div>
      </div>
    <div class="info container">
      <div class="info-detail" v-html="productDetail.description"/>
    </div>
  </div>

</template>

<script>
import store from '@/store'
import { mapState, mapActions } from 'vuex'
import { MinusIcon, PlusIcon, HeartIcon } from 'vue-feather-icons'
export default {
  name: 'ProductDetail',
  components: {
    MinusIcon,
    PlusIcon,
    HeartIcon
  },
  data () {
    return {
      product: {
        quantity: 1
      },
      cart: []
    }
  },
  beforeRouteEnter (to, from, next) {
    const data = {
      id: to.params.id
    }
    store.dispatch('productdetail/setProductDetail', data).then(_ => next())
    if (localStorage.getItem('access_token')) {
        const data = {
          product: 'product.images'
        }
        store.dispatch('productdetail/getProductLike',data)
    }
  },
  computed: {
    ...mapState('productdetail', ['productDetail', ['productLike']]),
    displayLike() {
      if (this.productLike) {
        const index = this.productLike.findIndex((item) => {
          if (item.product.id === this.productDetail.id) {
            return true
          }
        })
        return index
      }
    }
  },
  methods: {
    ...mapActions('productdetail',['setProductLike']),
    changeQuantity (number) {
      this.product.quantity = this.product.quantity +number
    },
    addToCart() {
      this.product = { ...this.productDetail, ...this.product}

      if (localStorage.getItem('access_token')) {
        if (typeof localStorage.getItem('cart') === 'object') {
          localStorage.setItem('cart',JSON.stringify([this.product]))
          store.dispatch('cart/setTotalQuantity',this.product.quantity)
        } else {
          this.cart = eval(localStorage.getItem('cart'))
          store.commit('cart/setTotalQuantity',this.product.quantity)
          let product_index = this.cart.findIndex(item => {
            return item.id === this.product.id
          })
          if (product_index !== -1) {
            this.cart[product_index].quantity += this.product.quantity
          } else this.cart.push(this.product)

          localStorage.setItem('cart',JSON.stringify(this.cart))
        }
      } else {
        store.commit('auth/setLogin',true)
      }
    },
    addLike (id) {
      const data = {
        product_id: id,
        product: 'product.images'
      }
      const isLike = this.$refs.like.getAttribute('id')
      if (localStorage.getItem('access_token')) {
        if (isLike === '1') {
          store.dispatch('productdetail/setDeleteProductLike',data).then(_ => {
            this.$refs.like.setAttribute('id','0')
          })
        } else {
          store.dispatch('productdetail/setProductLike',data).then(_ => {
            this.$refs.like.setAttribute('id','1')
          })
        }
      } else {
        store.dispatch('auth/setLogin',true)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
#product-detail {
  background-color: #d9d9d9;
  padding-bottom: 20px;
}
.cart {
  display: flex;
  flex-wrap: wrap;
  padding: 18px 0 0 0;
  margin-bottom: 20px;
  &__img {
    width: 40%;
    text-align: center;
    background-color: #ffffff;
    @media screen and (max-width: 1200px) {
      width: 50%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }

    .img__main {
      height: 365px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 300px;
        width: 100%;
        object-fit: contain;
      }
    }

    .img__list {
      display: flex;
      padding: 22px 0 19px 0;
      align-items: center;
      border-top: 1px solid #E2E3E4;

      li {
        width: 63px;
        height: 63px;
        border: 1px solid #E5E5E4;
        border-radius: 5px;
        margin-left: 22px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 45px;
        }
      }
    }
  }

  // cart info status
  &__info {
    width: calc(42% - 15px);
    background-color: #ffffff;
    margin-left: 15px;
    padding-top: 19px;
    padding-bottom: 6px;
    @media screen and (max-width: 1200px) {
      width: calc(50% - 15px);
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-left: 0;
    }

    .info__top {
      padding: 0 0 14px;
      border-bottom: 1px solid #E2E3E4;

      h2 {
        color: #505050;
        font-size: 23px;
        line-height: 31px;
        margin-bottom: 10px;
      }

      .top__group {
        display: flex;
        align-items: center;

        p {
          color: #808081;
          font-size: 14px;
        }

        .group__code {
          margin-left: 20px;

          span {
            font-weight: bold;
          }
        }

        .group__band {
          a {
            color: #01ADAB;
            font-weight: bold;
          }
        }
      }
    }

    .info__description {
      padding: 20px 0 11px;
      border-bottom: 1px solid #E2E3E4;

      p {
        color: #808081;
        font-size: 14px;
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }

        span {
          color: #505050;
        }
      }
    }

    .info__status {
      padding: 14px 0 23px;
      border-bottom: 1px solid #E2E3E4;

      p {
        color: #808081;
        font-size: 14px;
        @media screen and (max-width: 375px) {
          margin-bottom: 15px;
        }

        b {
          display: inline-block;
          font-size: 18px;
          color: #505050;
        }
      }

      .status__state {
        margin-bottom: 20px;
      }

      .status__price {
        b {
          color: #EA4036;
          font-size: 23px;
        }
      }

      .status__buy {
       display: flex;
        align-items: center;
        @media screen and (max-width: 375px) {
          flex-wrap: wrap;
        }

        .buy__quantity {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 130px;
          height: 37px;
          border: 1px solid #E2E3E4;
          border-radius: 5px;
          margin-left: 12px;
          @media screen and (max-width: 375px) {
            margin-bottom: 15px;
          }

          input {
            width: calc(100% - 76px);
            text-align: center;
            color: #8F9194;
            font-size: 18px;
            border: unset;
          }

          button {
            width: 38px;
            background-color: #EBEBEB;
            height: 100%;
            @media screen and (max-width: 991px) {
              width: 33px;
            }

            i {
              color: #8F9194;
              font-size: 18px;
            }
          }
          svg {
            color: #707070;
            vertical-align: middle;
            cursor: pointer;
          }
          .minus {
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
          }

          .plus {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }

        .buy__btn {
          width: 137px;
          background-color: #EA4036;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 13px;
          font-weight: bold;
          margin-left: 14px;
          cursor: pointer;
          img {
            margin-right: 6px;
          }

          @media screen and (max-width: 375px) {
            margin-left: 0;
          }
        }

        button {
          height: 37px;
          border-radius: 5px;
        }

        .buy__like {
          width: 47px;
          background-color: #505050;
          margin-left: 13px;
          svg {
            color: #FFFFFF;
          }
          &.active {
            background-color: #EA4036;
          }
        }
      }
    }

    .info__tag {
      padding: 19px 0 0;

      p {
        color: #808081;
        font-size: 12px;

        b {
          color: #505050;
          font-weight: bold;
        }
      }
    }

    .info__item {
      padding-left: 25px;
      @media screen and (max-width: 1040px) {
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  }

  // end

  // benefit
  &__benefit {
    padding: 23px 15px;
    background-color: #ffffff;
    width: 18%;
    border-left: 1px solid #E2E3E4;
    @media screen and (max-width: 1200px) {
      width: 100%;
      margin-top: 20px;
      border-left: unset;
    }

    h5 {
      color: #555555;
      font-size: 12px;
      font-weight: bold;
      padding-bottom: 26px;
    }

    .benefit__content {
      @media screen and (max-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        @media screen and (max-width: 1200px) {
          border-top: 2px solid #E2E3E4;
        }
      }

      .content__item {
        padding: 15px 0 13px;
        border-top: 1px solid #E2E3E4;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1200px) {
          border-top: unset;
          flex-direction: column;
          justify-content: center;
          width: calc(100% / 5);
          border-right: 2px solid #E2E3E4;
          &:last-child {
            border-right: unset;
          }
        }
        @media screen and (max-width: 600px) {
          width: 100%;
          flex-direction: unset;
          border-right: unset;
          justify-content: flex-start;
          border-bottom: 2px solid #E2E3E4;
          &:last-child {
            border-bottom: unset;
          }
        }

        img {
          height: 33px;
          @media screen and (max-width: 1200px) {
            margin: 0 0 10px;
          }
          @media screen and (max-width: 600px) {
            margin: 0 15px 0 0;
          }
        }

        span {
          color: #757575;
          font-size: 12px;
          margin-left: 10px;
          @media screen and (max-width: 1200px) {
            margin-left: 0;
          }
        }
      }
    }
  }

  // end
}
.info {
  padding: 0;
  &-detail {
    padding: 20px;
    background-color: #FFFFFF;
  }
}
</style>
