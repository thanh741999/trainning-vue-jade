<template>
  <div class="main">
    <div class="main__content cart-buy cart-successful container">
      <div class="content__cart">
        <div class="cart__header buy__header">
          <h2 class="header__title active">
            PHƯƠNG THỨC THANH TOÁN
          </h2>
        </div>
        <div class="buy__content">
          <p>Xin cám ơn qúy khách đã mua hàng tại Phanolink</p>
          <p>Đơn hàng <b>#{{oder.id}}</b> của bạn đã được đặt thành công!</p>
          <router-link to="/"><i class="fas fa-angle-left"></i>Quay lại trang chủ</router-link>
        </div>
        <div class="check__message">
          <p>Để việc xử lý đơn hàng nhanh và thuận tiện hơn PHANOLINK sẽ xác nhận đơn hàng qua tin nhắn SMS và
            EMAIL.</p>
          <p>Xin Quý khách vui lòng thường xuyên kiểm tra email và điện thoại.</p>
        </div>
      </div>
      <div class="content__sidebar">
        <div class="sidebar__bill">
          <div class="bill__header">
            <h4>Đơn Hàng (3 Sản Phẩm)</h4>
            <button>Sửa</button>
          </div>
          <div class="bill__product">
            <div class="product__info" v-for="(products,index) in oder.order_details">
              <div class="info__quantity">
                <span>{{products.product_quantity}}x</span>
                <p>{{ products.product.name }}</p>
              </div>
              <span>{{ oder.total }}đ</span>
            </div>
          </div>
          <div class="bill__ship">
            <p>Tạm Tính <span>{{ oder.total }}đ</span></p>
            <p>Phí Vận Chuyển <span>0</span></p>
          </div>
          <div class="bill__total">
            <span>Thành Tiền</span>
            <div class="total__price">
              <b>{{ oder.total }}đ</b>
              <p>(Đã bao gồm VAT nếu có)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: "Checkout",
  data () {
    return {
      oder: []
    }
  },
  beforeRouteEnter (to, from, next) {
    const data = {
      product: 'address,order_details.product.images',
      id: to.params.id
    }
    store.dispatch('cart/getOderDetail',data).then(res => {
      if (res) {
        to.meta.data = res.data
        next()
      }
    }).catch(error => {
      console.log(error)
    })
  },
  created() {
    this.oder = this.$route.meta.data
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #EBEBEB;
  .cart-successful {
    align-items: flex-start;
    display: flex;
    padding: 20px 0;
    .content__cart {
      background-color: #FFFFFF;
      .cart__header {
        text-align: center;
        .header__title {
          font-size: 14px;
          font-weight: bold;
          display: inline-block;
          position: relative;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          transform: translateY(-5px);
          color: #FFFFFF;
        }
        .active {
          background-color: #01ADAB;
          padding: 12px 28px 12px 20px;
          &::before {
            content: '';
            height: 0;
            width: 0;
            position: absolute;
            top: 0;
            left: -8px;
            border-bottom: 5px solid #016B68;
            border-left: 8px solid transparent;
          }
        }

      }
      .buy__content {
        width: auto;
        text-align: center;

        p {
          color: #434343;
          font-size: 20px;

          b {
            color: #EA4036;
            font-size: 24px;
          }

          &:nth-child(2) {
            margin-bottom: 18px;
          }
        }

        a {
          color: #01ADAB;
          font-size: 25px;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 50px;

          i {
            margin-right: 5px;
          }
        }
      }
    }

    .content__sidebar {
      background-color: #FFFFFF;
      margin-left: 15px;
      .sidebar__bill {
        padding: 20px 25px;
        .bill__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #E2E3E4;
          padding-bottom: 10px;
          h4 {
            color: #505050;
            font-size: 14px;
            margin-bottom: 15px;
          }
          button {
            border: 1px solid #EBEBEB;
            color: #838383;
          }
        }
        .bill__product {
          padding: 15px 0;
          border-bottom: 1px solid #E2E3E4;
          .product__info {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
            span {
              font-size: 14px;
              color: #838383;
            }
            .info__quantity {
              display: flex;
              span {
                color: #505050;
              }
              p {
                margin-left: 10px;
                width: 200px;
              }
            }
          }
        }

        .bill__ship {
          padding: 15px 0;
          border-bottom: 1px solid #E2E3E4;
          p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            color: #505050;
            span {
              color: #838383;
            }
          }
        }

        .bill__total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 0 0 0;
          span {
            font-size: 14px;
            color: #505050;
          }
          .total__price {
            text-align: right;
            b {
              color: #FA434E;
              font-size: 24px;
            }
            p {
              font-size: 12px;
              color: #505050;
            }
          }
        }
      }
    }


    .check__message {
      background-color: #EBEBEB;
      text-align: center;
      padding: 12px;

      p {
        color: #505050;
        font-size: 14px;

        &:first-child {
          margin-bottom: 2px;
        }
      }
    }
  }
}
</style>