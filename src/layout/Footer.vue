<template>
  <footer class="footer">
    <div class="container footer__top">
      <div class="top__item">
        <img src="@/assets/img/percent2x.png" alt="percent">
        <span>Sản phẩm<br> chính hãng</span>
      </div>
      <div class="top__item">
        <img src="@/assets/img/car2x.png" alt="car">
        <span>Giao hàng<br> toàn quốc</span>
      </div>
      <div class="top__item">
        <img src="@/assets/img/phone2x.png" alt="phone">
        <span>Thanh toán<br> linh hoạt</span>
      </div>
      <div class="top__item">
        <img src="@/assets/img/gift2x.png" alt="gift">
        <span>Tích điểm<br> đổi quà</span>
        <img src="@/assets/img/message_icon.png" alt="message" class="message__icon">
      </div>
    </div>
    <div class="footer__line">
      <div class="container line__content">
        <div class="content__item">
          <span>BẠN ĐANG CẦN ĐƯỢC TƯ VẤN</span>
          <div class="item__support">
            <img src="@/assets/img/telephone2x.png" alt="telephone">
            <span>Gọi ngay <span class="item--red">1800 6768</span>(miễn phí)</span>
          </div>
        </div>
        <div class="content__item">
          <span>NHẬP EMAIL NHẬN MÃ GIẢM GIÁ</span>
          <form class="item__form">
            <button>
              <img src="@/assets/img/mail2x.png" alt="mail">
            </button>
            <input type="text" placeholder="Nhập email của bạn">
          </form>
        </div>
      </div>
    </div>
    <div class="container footer__contact">
      <div class="contact__address contact__group">
        <a href=""><img src="@/assets/img/logo_green2x.png" alt="logo"></a>
        <div class="address">
          <h5>CÔNG TY CỔ PHẦN DƯỢC PHẨM PHANO</h5>
          <address>Địa chỉ: 31 Hồ Biểu Chánh, P.12, Q.Phú Nhuận, TP.HCM</address>
          <p>MST: 0304860663</p>
          <p>Email: cskh@phanolink.com</p>
          <p>Tel: 1800 6768</p>
        </div>
      </div>
        <div class="contact__support contact__group">
          <h4 class="group__title">HỖ TRỢ KHÁCH HÀNG</h4>
          <ul>
            <li><chevron-right-icon size="1.5x" class="custom-class"/><span>Chính sách đổi trả</span></li>
            <li><chevron-right-icon size="1.5x" class="custom-class"/><span>Chính sách giao hàng</span></li>
            <li><chevron-right-icon size="1.5x" class="custom-class"/><span>Chính sách bảo mật</span></li>
            <li><chevron-right-icon size="1.5x" class="custom-class"/><span>Hướng dẫn thanh toán</span></li>
            <li><chevron-right-icon size="1.5x" class="custom-class"/><span>Hướng dẫn đặt hàng</span></li>
            <li><chevron-right-icon size="1.5x" class="custom-class"/><span>Giải quyết phản hồi</span></li>
            <li><chevron-right-icon size="1.5x" class="custom-class"/><span>Giấy phép kinh doanh</span></li>
          </ul>
        </div>
        <div class="contact__account contact__group">
          <h4 class="group__title">TÀI KHOẢN</h4>
          <ul>
            <li><chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon><span>Đăng ký</span></li>
            <li><chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon><span>Đăng nhập</span></li>
            <li><chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon><span>Kiểm tra đơn hàng</span></li>
          </ul>
        </div>
        <div class="contact__social contact__group">
          <h4 class="group__title">KẾT NỐI VỚI CHÚNG TÔI</h4>
          <ul>
            <li><img src="@/assets/img/zalo2x.png" alt="zalo"></li>
            <li><img src="@/assets/img/fb2x.png" alt="facebook"></li>
            <li><img src="@/assets/img/gg-plus2x.png" alt="google"></li>
            <li><img src="@/assets/img/youtube2x.png" alt="youtube"></li>
          </ul>
        </div>
    </div>
    <div class="container footer__bottom">
      <p><span>© 2019 </span>- Bản quyền thuộc về Công ty CP Dược Phẩm Phano</p>
      <img src="@/assets/img/bct_icon2x.png" alt="certification">
    </div>
  </footer>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons'
export default {
  name: 'Footer',
  components: {
    ChevronRightIcon
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #FFFFFF;

  &__top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    .top__item {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-right: 1.8px solid #E5E5E4;
      padding: 20px 0;
      @media screen and (max-width: 768px) {
        img {
          height: 60px;
        }
      }
      @media screen and (max-width: 500px) {
        width: 50%;
        border-bottom: 1px solid #E5E5E4;
        padding: 20px 0;
        &:nth-child(2) {
          border-right: unset;
        }
      }

      &:last-child {
        border-right: unset;

        .message__icon {
          position: absolute;
          top: -35px;
          right: 20px;
        }

      }

      span {
        font-size: 16px;
        display: block;
        color: #757575;
        text-align: center;
        padding-top: 10px;
      }
    }
  }

  &__line {
    padding: 22px 0;
    background-color: #01ADAB;
    color: #FFFFFF;

    .line__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 0;
      span {
        font-size: 16px;
        margin-right: 0;
        @media screen and (max-width: 1200px) {
          margin-bottom: 15px;
        }
        @media screen and (max-width: 375px) {
          margin-bottom: 10px;
          font-size: 12px;
        }
      }

      .content__item {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        @media screen and (max-width: 500px) {
          width: 100%;
          flex-flow: column;
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }

        .item__support {
          background-color: #FFFFFF;
          border-radius: 30px;
          padding: 0 18px 8px;
          color: #757575;
          @media screen and (max-width: 1200px) {
            width: 350px;
            @media screen and (max-width: 375px) {
              width: 280px;
            }
          }

          &:last-child {
            padding: 2px 18px;
          }
          .item--red {
            color: #EA4036;
            font-size: 24.82px;
            //@media screen and (max-width: 768px) {
            //  font-size: 20px;
            //}
          }
        }

        .item__form {
          background-color: #FFFFFF;
          position: relative;
          border-radius: 20px;
          width: 300px;
          padding: 6px 18px 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          @media screen and(max-width: 1200px) {
            width: 350px;
            @media screen and (max-width: 375px) {
              width: 280px;
            }
          }

          input {
            padding: 3px 13px;
            color: green;
            outline: unset;
            border: unset;
            @media screen and(max-width: 1200px) {
              width: 70%;
            }
          }
        }
      }
    }
  }

  &__contact {
    padding: 72px 0 82px;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px) {
      padding: 72px 0 20px;
    }
    @media screen and (max-width: 768px) {
      padding: 72px 15px 20px;
    }
    a {
      display: block;
      margin-bottom: 10px;
    }

    .contact__account {
      width: calc(100% / 12 * 2.5);
      @media screen and (max-width: 1024px) {
        ul {
          margin-right: 17px;
        }
      }

    }

    .contact__address {
      width: calc(100% / 12 * 4);
    }

    .contact__social {
      ul {
        padding-left: 0;
      }

      @media screen and (max-width: 1024px) {
        width: calc(100% / 12 * 2.5);
      }
      @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-flow: column;
      }
    }

    .contact__support {
      width: calc(100% / 12 * 2.5);
      @media screen and (max-width: 1024px) {
        width: calc(100% / 12 * 3);
      }
      @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
      }
    }

    .contact__group {
      @media screen and (max-width: 768px) {
        width: 50%;
        margin-bottom: 20px;
      }
      @media screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
      }

      .address {
        font-size: 14px;
        @media screen and (max-width: 600px) {
          padding-right: 0;
          font-size: 14px;
          address {
            margin-bottom: 10px;
          }
        }

        h5 {
          color: #595959;
          font-size: 14px;
          @media screen and (max-width: 600px) {
            font-size: 16px;
          }
        }
      }

      .group__title {
        text-transform: uppercase;
        color: #595959;
        font-size: 18px;
        margin-bottom: 30px;
        @media screen and (max-width: 768px) {
          margin-bottom: 15px;
          font-size: 16px;
        }
      }

      ul {
        padding-left: 10px;
        @media screen and (max-width: 600px) {
          display: inline-block;
          padding-left: 0;
          text-align: left;
        }

        li {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          svg {
            font-size: 9px;
            color: #01ADAB;
          }
          span {
            font-size: 14px;
            color: #595959;
            margin-left: 3px;
          }
        }
      }

      &:last-child {
        padding-left: 0;

        ul {
          display: flex;
          align-items: center;
          padding: 0;
          li {
            margin-right: 9.6px;
          }
        }
      }
    }

  }

  &__bottom {
    border-top: 1px solid #707070;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 10px;
      color: #595959;
      font-weight: bold;
      span {
        font-size: 11.43px;
      }
    }
  }
}

</style>
