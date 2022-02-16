<template>
  <div class="modal-login" v-if="login"  @click.self="closeModal(false)">
    <div class="modal-content">
      <div class="modal-header user__modal">
        <button>
          <h2 class="active">
            ĐĂNG NHẬP
          </h2>
        </button>
        <button>
          <h2>
            ĐĂNG KÝ
          </h2>
        </button>
      </div>
      <div class="modal-main modal__login">
        <p class="line__clamp">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum </p>
        <form action="" class="main__form">
          <div class="form__group">
            <label for="username">Email / SĐT</label>
            <input type="text" id="username" placeholder="Nhập Email hoặc số điện thoại">
          </div>
          <div class="form__group">
            <label for="password_login">Mật Khẩu</label>
            <input type="text" id="password_login" placeholder="Mật khẩu từ 6 đến 32 ký tự">
          </div>
          <span>Quên mật khẩu? Nhấn vào <a href="#." data-dismiss="modal" data-toggle="modal"
                                           data-target="#Modal-password">đây</a> </span>
        </form>
        <div class="main__btn">
          <button>Đăng nhập</button>
          <button class="btn--fb">Đăng nhập bằng Facebook</button>
          <button class="btn--gg">Đăng nhập bằng Google</button>
        </div>
      </div>
      <div class="modal-main modal__register">
        <p class="line__clamp">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
          tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
          eum </p>
        <form action="" class="main__form">
          <div class="form__group">
            <div class="group__name group__info">
              <label for="name">Họ tên</label>
              <input type="text" id="name" placeholder="Nhập họ tên">
            </div>
            <div class="group__mail group__info">
              <label for="mail">Email</label>
              <input type="text" id="mail" placeholder="Nhập Email">
            </div>
            <div class="group__password group__info">
              <label for="password_register">Mật Khẩu</label>
              <input type="text" id="password_register" placeholder="Mật khẩu từ 6 đến 32 ký tự">
            </div>
            <div class="group__phone group__info">
              <label for="phone_number">Số điện thoại</label>
              <input type="text" id="phone_number" placeholder="Nhập số điện thoại">
            </div>
          </div>
        </form>
        <div class="main__btn btn--modal">
          <div class="btn__checkbox">
            <input type="checkbox"> Nhận các thông tin và chương trình khuyến mãi qua email
          </div>
          <button data-dismiss="modal" data-toggle="modal" data-target="#Modal-Register-successful">Đăng ký
          </button>
          <button class="btn--fb">Đăng ký bằng Facebook</button>
          <button class="btn--gg">Đăng ký bằng Google</button>
          <span>Khi bạn nhấn Đăng ký, bạn đã đồng ý thực hiện mọi giao dịch mua bán theo điều kiện sử dụng và chính sách của <a
              href="">PHANOLINK</a> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    login: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal (params) {
      this.$emit('closeModal', params)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-login {
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: 10;
  }
  .modal-content {
    width: 40%;
    background-color: #FFFFFF;
    position: fixed;
    left: 50%;
    top: 5%;
    transform: translateX(-50%);
    z-index: 11;
    box-shadow: 0 5px 15px;

    @media screen and (max-width: 500px) {
      padding: 0 15px;
      width: 90%;
    }

    .user__modal {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px 40px;
      button {
        & + button {
          margin-left: 20px;
        }
        h2 {
          cursor: pointer;
          font-size: 20px;
          @media screen and (max-width: 500px) {
            font-size: 1rem;
          }
        }
      }
    }

    .modal-main {
      padding: 20px 40px;
      p {
        font-size: 16px;
        line-height: 24px;
        color: #434343;
        margin-bottom: 3px;

        b {
          color: #EA4036;
        }
      }

      .main__form {
        margin-bottom: 35px;

        .form__group {
          margin-bottom: 8px;

          label {
            width: 100%;
            color: #434343;
            font-size: 16px;
            margin-bottom: 8px;
            font-weight: 400;
          }

          input {
            width: 100%;
            padding: 8px 18px 12px;
            outline: unset;
            border-radius: 6px;
            border: 1px solid #E2E3E4;
            &::placeholder {
              color: #808081;
              font-size: 14px;
            }
          }

          .group__info {
            margin-bottom: 8px;
          }
        }

        span {
          color: #434343;
          font-size: 14px;

          a {
            color: #EA4036;
            font-weight: bold;
          }
        }
      }

      .main__btn {
        display: flex;
        justify-content: center;
        flex-flow: column;

        .btn__checkbox {
          color: #808081;
          font-size: 14px;
          margin-bottom: 12px;
        }

        button {
          background-color: #505050;
          width: 100%;
          color: #ffffff;
          font-size: 16px;
          font-weight: bold;
          padding: 12px 20px;
          text-align: center;
          border-radius: 6px;
          margin-bottom: 11px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        .btn--fb {
          background-color: #3B5998;
        }

        .btn--gg {
          background-color: #E94A32;
        }

        .btn--block {
          background-color: #808081;
        }

        span {
          color: #434343;
          font-size: 14px;

          a {
            color: #EA4036;
            font-weight: bold;
          }
        }
      }

      .line__clamp {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      // ======= Modal register successful ======
      .main__success {
        margin-bottom: 32px;
      }

      // ====== End ==============

      // ====== Modal password ========
      .main__password {
        p {
          margin-bottom: 25px;
        }

        input {
          width: 100%;
          padding: 8px 18px 12px;
          outline: unset;
          border-radius: 6px;
          border: 1px solid #E2E3E4;
          margin-bottom: 15px;
          &::placeholder {
            color: #808081;
            font-size: 14px;
          }
        }
      }

      // ====== end ==========
    }

    .modal__register {
      display: none;
    }
  }
}
</style>
