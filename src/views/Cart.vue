<template>
  <div class="main">
    <div class="main__content  container">
      <div class="content__cart ">
        <h2 class="cart__header">
          <p class="active">
            GIỎ HÀNG
            <b>({{totalQuantity}} Sản Phẩm)</b>
          </p>
        </h2>
        <div v-if="carts" class="cart__table">
          <div class="table__header">
            <p class="header__product">Sản Phẩm</p>
            <p class="header__price">Giá</p>
            <p class="header__quantity">Số lượng</p>
          </div>
          <div class="table__content">
            <div class="table__item" v-for="(cart,index) in carts" :key="index">
              <div class="item__info">
                <img :src="cart.images[0].url" alt="decine">
                <div class="info__description">
                  <p>{{cart.name}}</p>
                  <button @click="deleteProduct(index)">Xóa</button>
                </div>
              </div>
              <div class="item__price">
                <template v-if="cart.discount !== 'No'">
                  <b>{{discountPrice(cart.price,cart.discount)}}</b>
                  <span>{{cart.price}}</span>
                </template>
                <b v-else>{{cart.price}}</b>
              </div>
              <div class="item__quantity">
                  <button class="minus" @click="changeQuantity(cart, -1)" :disabled="cart.quantity === 1"><minus-icon size="1.5x" class="custom-class minas"/></button>
                  <input type="text" v-model="cart.quantity">
                  <button class="plus" @click="changeQuantity(cart, 1)"><plus-icon size="1.5x" class="custom-class plus"/></button>
              </div>
            </div>
          </div>
        </div>
        <h4 v-else>Empty</h4>
      </div>
      <div class="content__sidebar ">
        <div class="sidebar__voucher">
          <h2>Mã Giảm Giá:</h2>
          <form action="" class="voucher__form">
            <input type="text" placeholder="Nhập mã giảm giá....">
            <button>ÁP DỤNG</button>
          </form>
        </div>
        <div class="sidebar__price">
          <div class="price__discount">
            <div class="discount__item">
              Tạm Tính:
              <span>{{ displayPrice }}</span>
            </div>
            <div class="discount__item">
              Giảm Giá:
              <span>{{ displayPrice - displayAfterDiscountPrice}}</span>
            </div>
          </div>
          <div class="price__total">
            Thành Tiền:
            <div class="total">
              <b>{{ displayAfterDiscountPrice }}</b>
              <span>(Đã bao gồm VAT nếu có)</span>
            </div>
          </div>
        </div>
        <button class="sidebar__btn" @click="CreateOder">
<!--          <a href="javascript:void(0)"></a>-->
          TIẾN HÀNH ĐẶT HÀNG
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {MinusIcon, PlusIcon} from "vue-feather-icons";
import {mapActions, mapState} from "vuex";
import store from '@/store'
export default {
  name: 'Cart',
  components: {
    MinusIcon,
    PlusIcon
  },
  beforeRouteEnter (to, from ,next) {
    to.meta.data = JSON.parse(localStorage.getItem('cart'))
    next()
  },
  data () {
    return {
      carts: []
    }
  },
  created() {
    this.carts = this.$route.meta.data
  },
  computed: {
    ...mapState('cart',['totalQuantity']),
    displayPrice () {
      let totalPrice = 0
      if (this.carts) {
        return this.carts.reduce((total,item)=>{
          total = item.quantity * item.price
          totalPrice += total
          return totalPrice
        },0)
      }
    },
    displayAfterDiscountPrice () {
      let totalPrice = 0
      if (this.carts) {
        return this.carts.reduce((total,item)=>{
          if(item.discount !== 'No') {
            let dis = item.discount.slice(0, -1)
            total = ((item.quantity * item.price) - (((item.quantity * item.price) * dis )/ 100))
            return totalPrice += total
          } else {
            return totalPrice += (item.quantity * item.price)
          }
        },0)
      }
    }
  },
  methods: {
    ...mapActions('cart',['CreatedOder']),
    discountPrice (price, discount) {
      if(discount !== 'No') {
        const dis = discount.slice(0, -1)
        const disPrice = (price - ((price* dis) / 100))
        return disPrice
      }
    },
    changeQuantity (product, number) {
      product.quantity += number
      store.dispatch('cart/setTotalQuantity',number)
    },
    deleteProduct (id) {
      store.dispatch('cart/setTotalQuantity', -this.carts[id].quantity)
      this.carts.splice(id,1)
      localStorage.setItem('cart',JSON.stringify(this.carts))
    },
    CreateOder() {
      if (localStorage.getItem('access_token')) {
        let data = {
          payment_method: "Cash on Delivery",
          status: 1,
          address_id: 20,
          total: this.displayAfterDiscountPrice,
          products: [...this.carts]
        }
        localStorage.setItem('cart',JSON.stringify(this.carts))
        this.CreatedOder(data).then(res => {
          if(res) {
            this.$router.push({ name: 'Checkout' , params: { id: res.data.id } })
            localStorage.removeItem('cart')
          }
        }).catch(error => {
          console.log(error)
        })
      } else {
        store.dispatch('auth/setLogin',true)
        store.dispatch('auth/setCheckout', true)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #EBEBEB;
}
.main__content {
  display: flex;
  flex-wrap: wrap;
  padding: 25px 0;
  .content__cart {
    width: 70%;
    background-color: #ffffff;
    padding: 0 25px;
    @media screen and (max-width: 991px) {
      width: 100%;
      margin-bottom: 20px;
    }
    h2 {
      margin-bottom: 26px;
      p {
        width: 160px;
        transform: translateY(-4px);
        font-weight: bold;
        text-align: center;
        font-size: 14px;
        padding: 8px 0 12px;
        display: inline-block;
        color: #808081;
        b {
          display: block;
          color: #EA4036;
          margin-top: 5px;
        }
      }
      p.active {
        background-color: #01ADAB;
        color: #ffffff;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        position: relative;
        &::before {
          content: "";
          height: 0;
          width: 0;
          position: absolute;
          top: 0;
          left: -5px;
          border-bottom: 5px solid #016B68;
          border-left: 5px solid transparent;
        }

      }
    }
    .cart__table {
      .table__header {
        padding-bottom: 8px;
        display: flex;
        align-items: center;
        @media screen and (max-width: 600px) {
          display: none;
        }
        p {
          color: #808081;
          font-size: 14px;
        }
        .header__product {
          width: calc(100% / 12 * 7);
        }
        .header__price {
          width: calc(100% / 12 * 2.5);
          text-align: center;
        }
        .header__quantity {
          width: calc(100% /12 * 2.5);
          text-align: center;
        }
      }
      .table__item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        border-top: 1px solid #e5e5e4;
        @media screen and (max-width: 600px) {
          justify-content: center;
          margin-bottom: 20px;
          &:first-child {
            border-top: unset;
          }
        }
        .item__info {
          width: calc(100% / 12 * 7);
          display: flex;
          align-items: center;
          padding: 21px 25px;
          @media screen and (max-width: 600px) {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
          img {
            width: 40px;
            height: 40px;
            object-fit: contain;
          }
          .info__description {
            margin-left: 25px;
            @media screen and (max-width: 600px) {
              width: 100%;
              margin-left: 0;
              text-align: center;
              margin-top: 20px;
            }
            p {
              color: #434343;
              font-size: 14px;
              margin-bottom: 5px;
            }
            button {
              color: #EA4036;
              border-bottom: 1px solid #EA4036;
              background-color: unset;
            }
          }
        }
        .item__price {
          width: calc(100% / 12 * 2.5);
          text-align: center;
          @media screen and (max-width: 600px) {
            width: auto;
          }
          b {
            font-size: 20px;
            display: block;
          }
          span {
            color: #CCCCCC;
            font-size: 10px;
            text-decoration:line-through;
          }
        }
        .item__quantity {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 85px;
          margin: 0 auto;
          border: 1px solid #e5e5e4;
          border-radius: 5px;
          @media screen and (max-width: 600px) {
            width: auto;
            margin-left: 20px;
          }
          button {
            width: 25px;
            height: 25px;
            background-color: #EBEBEB;
            svg {
              color: #8F9194;
              font-size: 11px;
              line-height: 20px;
            }
          }
          input {
            width: calc(100% - 48px);
            text-align: center;
            color: #8F9194;
            font-size: 11px;
            border: none;
          }
          .minus {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .plus {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
    }
  }
  .content__sidebar {
    width: calc(30% - 13px);
    margin-left: 13px;
    @media screen and (max-width: 991px) {
      width: 100%;
      margin-left: 0;
    }
    .sidebar__voucher {
      background-color: #ffffff;
      padding: 15px 25px;
      margin-bottom: 16px;
      h2 {
        color: #505050;
        font-size: 14px;
        padding-bottom: 14px;
        border-bottom: 1px solid #E2E3E4;
      }
      .voucher__form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 44px;
        margin-top: 17px;
        border: 1px solid #EBEBEB;
        input {
          height: 100%;
          width: 65%;
          outline: unset;
          padding: 0 10px;
          &::placeholder {
            font-size: 14px;
            color: #838383;
          }
        }
        button {
          background-color: #01ADAB;
          height: 100%;
          width: 35%;
          color: #ffffff;
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
    .sidebar__price {
      padding: 25px;
      background-color: #ffffff;
      margin-bottom: 16px;
      .price__discount {
        border-bottom: 1px solid #E2E3E4;
        .discount__item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          color: #505050;
          margin-bottom: 10px;
        }
      }
      .price__total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .total {
          display: flex;
          align-content: flex-end;
          flex-flow: column;
          b {
            font-size: 24px;
            color: #FA434E;
            text-align: right;
          }
          span {
            font-size: 12px;
            color: #505050;
          }
        }
      }
    }
    .sidebar__btn {
      background-color: #EA4036;
      text-align: center;
      width: 100%;
      height: 56px;
      color: #FFFFFF;
      font-size: 22px;
      font-weight: bold;
    }
  }
}
</style>
