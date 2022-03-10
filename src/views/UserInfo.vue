<template>
  <div class="main">
    <div class="content container" v-if="form">
      <div class="content-sidebar">
        <div class="sidebar sidebar-control">
          <h2>Quản Lí Tài Khoản</h2>
          <ul>
            <li class="active">
              <chevron-right-icon size="1.5x"/>
              Thông tin tài khoản
            </li>
            <li>
              <chevron-right-icon size="1.5x"/>
              Quản Lý Đơn Hàng
            </li>
            <li>
              <chevron-right-icon size="1.5x"/>
              Sản phẩm yêu thích
            </li>
            <li>
              <chevron-right-icon size="1.5x"/>
              Sản phẩm đã xem
            </li>
            <li>
              <chevron-right-icon size="1.5x"/>
              Sổ địa chỉ
            </li>
            <li>
              <chevron-right-icon size="1.5x"/>
              Thông báo của tôi
            </li>
          </ul>
        </div>
        <div class="sidebar sidebar-pr">
          <h2>ĐƯỢC TÀI TRỢ</h2>
          <img src="@/assets/img/control_page-1-2x.png" alt="">
          <div class="more">
            <span class="text-color">Sức khỏe giới tính</span>
            <h4 class="line-clamp-2">Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit</h4>
            <router-link to="/" class="text-color">Xem Thêm</router-link>
          </div>
        </div>
      </div>
      <div class="content-info">
        <h2 class="content-header">
          <p class="active">
            THÔNG TIN TÀI KHOẢN
          </p>
        </h2>
        <p v-if="errorsMessage" class="errorsMessage">{{errorsMessage}}</p>
        <ValidationObserver tag="div" class="form-info" @onsubmit.prevent="changeProfile"
                            v-slot="{ invalid, validated }">
          <ValidationObserver ref="changeinfo" tag="div" class="info-detail">
            <ValidationProvider rules="required|name" v-slot="{ errors}" class="detail-block">
              <label for="name"> <span class="color-red">*</span>Họ tên</label>
              <input type="text" id="name" :placeholder="form.name" v-model="form.name">
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider tag="div" class="detail-block" v-slot="{ errors}" rules="required|" slim>
              <label for="email"> <span class="color-red">*</span>Email</label>
              <input
                  type="text"
                  id="email"
                  :placeholder="form.email"
                  v-model="form.email">
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider tag="div" class="detail-block" rules="required|max:10|phone_number" v-slot="{ errors}">
              <label for="email"> <span class="color-red">*</span>Số điện thoại</label>
              <input
                  type="text"
                  id="phone"
                  :placeholder="form.phone"
                  v-model="form.phone"
                  size="10"
                  maxlength="10">
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
            <div class="detail-block">
              <label>Giới tính</label>
              <div class="sex">
                <label :class="form.gender == 1 ?'active' : ''" for="1" @click="changeSex">
                  Nam
                  <input type="radio" name="sex" id="1">
                </label>
                <label :class="form.gender == 0 ?'active' : ''" for="0">
                  Nữ
                  <input type="radio" name="sex" id="0" @click="changeSex">
                </label>
              </div>
            </div>
            <div class="detail-block">
              <label>Ngày sinh</label>
              <div class="select-date">
                <select @change="ChangeBirthday" id="day">
                  <option :value="{displayDay}">{{displayDay}}</option>
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                </select>
                <select @change="ChangeBirthday" id="month">
                  <option :value="{displayMonth}">{{displayMonth}}</option>
                  <option value="01">Tháng 1</option>
                  <option value="02">Tháng 2</option>
                  <option value="03">Tháng 3</option>
                  <option value="04">Tháng 4</option>
                </select>
                <select @change="ChangeBirthday" id="year">
                  <option disabled selected :value="{displayYear}">{{displayYear}}</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                </select>
              </div>
            </div>
            <p><span class="red">*</span>Bắt buộc</p>
          </ValidationObserver>
          <ValidationObserver tag="form" class="info-change">
            <span><input type="checkbox" id="change" v-model="changePassword.isChangePassword"></span>
            <label for="change">Thay đổi mật khẩu</label>
            <ValidationObserver v-slot="{ invalid, validated }" ref="observer" tag="div" class="password__form">
              <ValidationProvider tag="div" rules="required|name" class="form__group" v-slot="{ errors }">
                <label for="change-password">Mật khẩu cũ</label>
                <input type="password" id="change-password" placeholder="Nhập mật khẩu cũ" v-model="changePassword.old_password">
                <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider tag="div" rules="required|name" class="form__group" v-slot="{ errors }">
                <label for="new-password">Mật khẩu mới</label>
                <input type="password" id="new-password" placeholder="Mật khẩu từ 6 đến 32 ký tự"
                       v-model="changePassword.new_password"
                       @change="validationConFirmPassword">
                <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider class="form__group" rules="required" v-slot="{ errors }">
                <label for="re-password">Xác nhận mật khẩu mới</label>
                <input type="password" id="re-password" placeholder="Nhập lại mật khẩu mới"
                       v-model="changePassword.new_password_confirmation"
                       @change="validationConFirmPassword">
                <span v-if="errorsConfirmPassWord" class="error">Errors</span>
              </ValidationProvider>
            </ValidationObserver>
          </ValidationObserver>
          <button @click="changeProfile">CẬP NHẬT THAY ĐỔI</button>
        </ValidationObserver>

      </div>
    </div>
  </div>
</template>

<script>
import {ChevronRightIcon} from 'vue-feather-icons'
import store from '@/store'

export default {
  name: "UserInfo",
  components: {
    ChevronRightIcon
  },
  data() {
    return {
      form: null,
      changePassword: {
        isChangePassword: false,
        old_password: '1234567',
        new_password: '1234567',
        new_password_confirmation: '1234567'
      },
      errorsConfirmPassWord: false,
      errorsMessage: null
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      store.dispatch('auth/GetuserInfo').then(res => {
        to.meta.data = res
        next()
      })
    }
  },
  created() {
    this.form = this.$route.meta.data
  },
  computed: {
    displayYear: {
      get () {
          return this.form.birthday.slice(0,4)
      },
      set (value) {
        this.form.birthday = `${value}-02-23`
      }
    },
    displayMonth: {
      get () {
          return this.form.birthday.slice(-5,-3)
      },
      set (value) {
        this.form.birthday = `1990-${value}-23`
      }
    },
    displayDay: {
      get () {
          return this.form.birthday.slice(-2)
      },
      set (value) {
        this.form.birthday = `1990-02-${value}`
      }
    }
  },
  methods: {
    ChangeBirthday(e) {
      if (e.target.id === 'day') {
        this.displayDay = e.target.value
      } else if (e.target.id === 'month') {
        this.displayMonth = e.target.value
      } else {
        this.displayYear = e.target.value
      }
    },
    changeSex(e) {
      this.form.gender = Number(e.target.id)
    },
    validationConFirmPassword () {
      if (this.changePassword.new_password) {
        if(this.changePassword.new_password !== this.changePassword.new_password_confirmation) {
          this.errorsConfirmPassWord = true
        } else {
          this.errorsConfirmPassWord = false
        }
      }
    },
    changeProfile() {
      const isValid = this.$refs.changeinfo.validate();
      if (this.changePassword.isChangePassword) {
        const isValidPassWord = this.$refs.observer.validate();
        if (isValid && isValidPassWord) {
          this.form = {...this.form,...this.changePassword}
          delete this.form.id
           store.dispatch('auth/ChangeProfile', this.form)
        }
      } else {
        store.dispatch('auth/ChangeProfile', this.form)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #EBEBEB;
  padding: 20px 0;

  .content {
    display: flex;
    justify-content: space-between;

    &-sidebar {
      width: 25%;

      .sidebar {
        background-color: #FFFFFF;
        margin-bottom: 20px;

        h2 {
          font-size: 15px;
          padding: 15px;
          border-bottom: 1px solid #a9a9a9;
        }

        ul {
          padding: 15px;

          li {
            margin-bottom: 5px;
            font-size: 14px;

            &.active {
              font-weight: bold;
              color: #434343;

              svg {
                opacity: 1;
              }
            }

            svg {
              font-size: 9px;
              color: #01ADAB;
              opacity: 0;
            }
          }
        }

        &-pr {
          padding: 0 20px;

          h2 {
            font-size: 14px;
            background-color: #EEE8A9;
            color: #808081;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            position: relative;
            width: 160px;
            transform: translateY(-4px);
            font-weight: bold;
            text-align: center;
            padding: 8px 0 12px;
            display: inline-block;
            margin-bottom: 10px;

            &::before {
              content: "";
              height: 0;
              width: 0;
              position: absolute;
              top: 0;
              left: -5px;
              border-bottom: 5px solid #C6BE85;
              border-left: 5px solid transparent;
            }
          }

          img {
            width: 100%;
          }

          .more {
            .text-color {
              color: #01ADAB;
            }

            span {
              font-size: 14px;
              margin-bottom: 14px;
            }

            h4 {
              color: #434343;
              font-size: 20px;
              margin-bottom: 30px;
            }
          }
        }
      }
    }

    &-info {
      width: calc(100% - 25% - 20px);
      background-color: #FFFFFF;
      padding: 0 20px;

      h2 {
        margin-bottom: 26px;

        p {
          width: 180px;
          transform: translateY(-4px);
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
          top: -10px;

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

      .errorsMessage {
        font-weight: bold;
        color: #EA4036;
        text-align: center;
        padding: 8px 18px;
        border: 1px dotted #EA4036;
        margin-bottom: 15px;
      }

      .form-info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 20px;

        .info-detail {
          width: 60%;

          .detail-block {
            margin-bottom: 15px;

            .error {
              color: #EA4036;
              font-size: 14px;
              font-weight: bold;
            }

            label {
              width: 100%;
              margin-bottom: 0;
              font-size: 16px;
              color: #434343;

              span.color-red {
                color: #ea4036;
              }
            }

            input {
              width: 100%;
              padding: 8px 18px;
              border-radius: 5px;
              border: 1px solid #E2E3E4;
              color: #808081;
              font-size: 14.38px;
            }

            .sex {
              border-radius: 5px;

              input {
                display: none;
              }

              label {
                background-color: unset;
                color: #808081;
                width: 50%;
                height: 38px;
                text-align: center;
                border: 1px solid #E2E3E4;
                line-height: 38px;
              }

              label.active {
                background-color: #808081;
                color: #FFFFFF;
                border: 1px solid #707070;
              }
            }

            .select-date {
              display: flex;
              align-items: center;
              justify-content: space-between;

              select {
                width: calc((100% / 3) - 10px);
                padding: 8px 18px;
                color: #808081;
                font-size: 14px;
                border-radius: 5px;
              }
            }
          }

          p {
            color: #808081;
            font-size: 14px;

            span.red {
              color: #EA4036;
            }
          }
        }

        .info-change {
          width: calc(40% - 30px);
          margin-left: 30px;

          label {
            margin-left: 10px;
          }

          span {
            display: inline-block;
            height: 13px;

            &.active {
              background-color: #01ADAB;
            }
          }

          .password__form {
            .form__group {
              margin-bottom: 10px;

              label {
                font-size: 16px;
                color: #434343;
                margin-bottom: 0;
              }

              input {
                width: 100%;
                padding: 8px 12px;
                border-radius: 5px;
                border: 1px solid #E2E3E4;

                &::placeholder {
                  color: #808081;
                  font-size: 14px;
                }
              }
              .error {
                color: #EA4036;
                font-size: 13px;
                font-weight: bold;
              }
            }
          }
        }

        button {
          background-color: #01ADAB;
          color: #FFFFFF;
          font-size: 18px;
          width: 100%;
          text-align: center;
          padding: 10px 0;
          border-radius: 5px;
          margin-top: 30px;
        }
      }

    }
  }
}
</style>