<template>
  <header class="header" id="header" ref="header">
    <div class="header-main">
      <div class="container header__top">
        <div class="header__top__hot header__top--group">
          <img src="@/assets/img/fire2x.png" alt="fire">
          <a href="" class="title"> Khuyến mãi HOT</a>
        </div>
        <div class="header__top__nofication header__top--group">
          <img src="@/assets/img/message2x.png" alt="nofication">
          <div class="text">
            <a class="title">Thông báo</a>
            <span>của tôi</span>
          </div>
        </div>
        <div class="header__top__login header__top--group">
          <img src="@/assets/img/login2x.png" alt="login">
          <div class="text">
            <button class="title" @click="Login">Đăng nhập</button>
            <a href="">Tài khoản</a>
          </div>
        </div>
      </div>
      <div class="container header__middle">
        <h1 class="middle__logo"><a href="index.html"> <img src="@/assets/img/Logo.png" alt="logo"></a></h1>
        <form action="" class="middle__search">
          <input v-model="SearchProduct" type="text" placeholder="Bạn đang tìm thuốc gì...">
          <button type="button" class="btn-search" @click="setProductBySearch(SearchProduct); SearchProduct = ''">
            <search-icon size="1.5x" class="custom-class"/>
            <span>Tìm Kiếm</span>
          </button>
        </form>
        <div class="middle__btn">
          <button class="btn__item">
            <a href="toa.html">
              <img src="@/assets/img/toa2x.png" alt="toa">
              <span>Tạo toa thuốc</span>
            </a>
          </button>
          <button class="btn__item">
            <a href="cart.html">
              <img src="../assets/img/cart2x.png" alt="cart">
              <span>Giỏ hàng</span>
              <span class="item__bard">{{cart.length}}</span>
            </a>
          </button>
        </div>
      </div>
      <nav class="container header__bottom">
        <ul>
          <li class="bottom__item">
            <img src="@/assets/img/menu2x.png" alt="menu">
            <a href="#.">DANH MỤC SẢN PHẨM</a>
          </li>
          <li class="bottom__item">
            <img src="@/assets/img/fire-red2x.png" alt="fire">
            <a href="#.">KHUYẾN MÃI HOT</a>
          </li>
          <li class="bottom__item">
            <img src="@/assets/img/localtion2x.png" alt="location">
            <a href="#.">HỆ THỐNG NHÀ THUỐC</a>
          </li>
          <li class="bottom__item">
            <img src="@/assets/img/heart2x.png" alt="heart">
            <a href="#.">GÓC SỨC KHỎE</a>
          </li>
          <li class="bottom__item">
            <img src="@/assets/img/home2x.png" alt="home">
            <a href="#.">GIỚI THIỆU</a>
          </li>
          <li class="bottom__item">
            <img src="@/assets/img/question2x.png" alt="question">
            <a href="#.">HƯỚNG DẪN</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- ======header scrolll======= -->
    <div class="header--scroll">
      <div class="header__middle container">
        <h1 class="middle__logo"><a href="index.html"> <img src="@/assets/img/Logo.png" alt="logo"></a></h1>
        <form action="" class="middle__search">
          <input type="text" placeholder="Bạn đang tìm thuốc gì...">
          <search-icon size="1.5x" class="custom-class"/>
        </form>
        <div class="middle__btn">
          <button class="btn__item">
            <a href="toa.html"><img src="@/assets/img/toa2x.png" alt="toa">
              <span>Tạo toa thuốc</span></a>
          </button>
          <button class="btn__item">
            <a href="cart.html">
              <img src="@/assets/img/cart2x.png" alt="cart">
              <span>Giỏ hàng</span>
              <span class="item__bard">69</span>
            </a>
          </button>
        </div>
      </div>
    </div>
    <!-- Sub header 767px responsive -->
    <div class="container header-sub">
      <h1><img src="@/assets/img/Logo.png" alt="logo"></h1>
      <div class="header__nav">
        <align-justify-icon @click="ToggleSidebar" size="1.5x" class="custom-class"></align-justify-icon>
        <form action="" class="nav__search">
          <input type="text" placeholder="Bạn đang tìm thuốc gì...">
          <search-icon size="1.5x" class="custom-class"/>
        </form>
        <div class="nav__btn">
          <button class="btn__item">
            <img src="@/assets/img/toa2x.png" alt="toa">
          </button>
          <button class="btn__item">
            <img src="@/assets/img/cart2x.png" alt="cart">
            <span class="item__bard">69</span>
          </button>
        </div>
      </div>
      <div ref="navbar" class="nav__bar">
        <div class="bar__control">
          <div class="control__item">
            <img src="@/assets/img/fire2x.png" alt="fire">
            <a href="" class="text"> Khuyến mãi HOT</a>
          </div>
          <div class="control__item">
            <img src="@/assets/img/message2x.png" alt="nofication">
            <div class="text">
              <a href="" class="title">Thông báo <br> của tôi</a>
            </div>
          </div>
          <div class="control__item">
            <img src="@/assets/img/login2x.png" alt="login">
            <div class="text">
              <button class="title" data-toggle="modal" data-target="#Modal-Login-Register">Đăng nhập</button>
              <a href="">Tài khoản</a>
            </div>
          </div>
        </div>
        <ul class="bar__control">
          <li class="nav__item">
            <img src="../assets/img/menu2x.png" alt="menu">
            <a>DANH MỤC SẢN PHẨM</a>
          </li>
          <li class="nav__item">
            <img src="../assets/img/fire-red2x.png" alt="fire">
            <a>KHUYẾN MÃI HOT</a>
          </li>
          <li class="nav__item">
            <img src="@/assets/img/localtion2x.png" alt="location">
            <a>HỆ THỐNG NHÀ THUỐC</a>
          </li>
          <li class="nav__item">
            <img src="@/assets/img/heart2x.png" alt="heart">
            <a>GÓC SỨC KHỎE</a>
          </li>
          <li class="nav__item">
            <img src="@/assets/img/home2x.png" alt="home">
            <a>GIỚI THIỆU</a>
          </li>
          <li class="nav__item">
            <img src="@/assets/img/question2x.png" alt="question">
            <a>HƯỚNG DẪN</a>
          </li>
        </ul>
        <div class="sidebar__item bar__control">
          <h4 class="sidebar__title">Danh Mục Sản Phẩm</h4>
          <ul class="sidebar__list">
            <li class="list--active">
              <chevron-right-icon size="1.5x" class="custom-class"/>
              Mẹ & bé
              <ul class="sub__list">
                <li>Sữa bột</li>
                <li>Chăm sóc em bé</li>
                <li>Tã giấy & khăn ướt em bé</li>
              </ul>
            </li>
            <li>Thực phẩm chức năng</li>
            <li>Chăm sóc cá nhân</li>
            <li>Chăm sóc sức khỏe</li>
            <li>Tủ thuốc gia đình</li>
            <li>Chăm sóc phụ nữ</li>
            <li>Chăm sóc sắc đẹp</li>
            <li>Sức khỏe giới tính</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { SearchIcon, AlignJustifyIcon, ChevronRightIcon } from 'vue-feather-icons'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Header',
  components: {
    SearchIcon,
    AlignJustifyIcon,
    ChevronRightIcon
  },
  data () {
    return {
      SearchProduct: ''
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    ...mapState('cart', ['cart'])
  },
  methods: {
    ...mapActions('product', ['setProductBySearch']),
    handleScroll (e) {
      const scrolltop = document.documentElement.scrollTop
      const headerheight = this.$refs.header.clientHeight
      const headerwidth = this.$refs.header.clientWidth
      if (scrolltop >= headerheight && headerwidth >= 767) {
        document.getElementsByClassName('header--scroll')[0].classList.add('show')
      } else {
        document.getElementsByClassName('header--scroll')[0].classList.remove('show')
      }
    },
    ToggleSidebar () {
      this.$refs.navbar.classList.toggle('toggle-nav')
    },
    Login () {
      this.$store.commit('auth/setLogin', true)
    }
  }

}
</script>

<style lang="scss" scoped>

.header {
  background-color: #01ADAB;
  padding: 10px 0;
  @media screen and (max-width: 765px) {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
    padding: 0;
    margin-bottom: 0;
  }
  &-main {
    display: block;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  &-sub {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
      padding: 12px 10px;
    }
  }
  &__top {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;

    &__hot {
      margin-right: 73.5px;
    }

    &__nofication {
      margin-right: 68px;
    }

    &--group {
      display: flex;
      align-items: center;
      color: #FFFFFF;
      a.title {
        color: #FFFFFF;
        font-weight: bold;
      }
      img {
        margin-right: 5px;
      }

      .text {
        display: flex;
        justify-content: center;
        flex-flow: column;
        align-items: flex-start;

        span {
          font-size: 11.58px;
          text-align: left;
          line-height: 14.06px;
          display: block;
        }

        button {
          color: #FFFFFF;
          padding: 0;
        }

        a {
          font-size: 11.58px;
          color: #FFFFFF;
        }
      }

      .title {
        font-size: 13.2px;
        font-weight: bold;
      }
    }
  }
  &__middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    .middle__logo {
      margin-right: 30px;
      img {
        width: 100%;
      }
    }
    .middle__search {
      width: 50%;
      position: relative;
      margin-right: 16px;
      input {
        width: 100%;
        padding: 8px 12px;
        border-radius: 5px;
        border: none;
      }
      .btn-search {
        background-color: #E2E3E4;
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        padding: 10px 8px 11px;
        width: 100px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        span {
          font-weight: bold;
          color: #838383;
          font-size: 13px;
          margin-left: 5px;
        }
        svg {
          font-size: 10px;
          color: #838383;
        }
      }
    }
    .middle__btn {
      display: flex;
      .btn__item {
        margin-right: 10px;
        padding: 5px;
        position: relative;
        border: none;
        border-radius: 5px;
        background-color: #FFFFFF;
        a {
          width: 110px;
          display: flex;
          align-items: center;
          span {
            margin-left: 5px;
            font-size: 13px;
            color: #838383;
          }
          .item__bard {
            display: block;
            position: absolute;
            right: -10px;
            top: -10px;
            height: 25px;
            width: 25px;
            border-radius: 50%;
            background-color: #FA434E;
            color: #F9FFFF;
            text-align: center;
            line-height: 20px;
            font-size: 13px;
          }
        }
      }
    }
  }
  &__bottom {
    ul {
      list-style-type: none;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0;
      margin-bottom: 0;
      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      li {
        @media screen and (max-width: 768px) {
          width: calc((100% / 3) - 20px);
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        a {
          font-size: 13px;
          color: #FFFFFF;
          margin-left: 8px;
          font-weight: bold;
        }
      }
    }
  }
  //responsive mobile header
  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &>svg {
      color: #FFFFFF;
    }
    .nav__search {
      width: 55%;
      position: relative;
      input {
        width: 100%;
        padding: 5px;
        border: none;
        border-radius: 5px;
        @media screen and (max-width: 750px) {
          &::placeholder {
            font-size: 12px;
          }
        }
      }
      svg {
        position: absolute;
        right: 8px;
        top: 6px;
        font-size: 13px;
        @media screen and (max-width: 375px) {
          display: none;
        }
      }
    }
    .nav__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      .btn__item {
        margin-left: 10px;
        padding: 5px;
        border-radius: 5px;
        position: relative;
        background-color: #FFFFFF;
        .item__bard {
          display: block;
          position: absolute;
          right: -10px;
          top: -10px;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background-color: #FA434E;
          color: #F9FFFF;
          text-align: center;
          line-height: 20px;
          font-size: 13px;
        }
      }
    }
  }
  .nav__bar {
    position: fixed;
    top: 20%;
    left: -50%;
    height: 80vh;
    overflow: scroll;
    padding: 15px 10px;
    background-color: #01ADAB;
    opacity: 0;
    transition: .3s linear;
    .bar__control {
      border-bottom: 2px solid #FFFFFF;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
        border: none;
      }
      .control__item {
        display: flex;
        align-items: center;
        color: #FFFFFF;
        margin-bottom: 10px;
        img {
          width: 13%;
        }
        button {
          border: none;
          background-color: unset;
          color: #FFFFFF;
          padding: 0;
        }
        .text {
          font-size: 10px;
          margin: 0 0 0 10px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-flow: column;
          color: #FFFFFF;
          a {
            font-size: 11px;
            text-align: left;
            color: #FFFFFF;
          }
        }
      }
    }
    &>ul {
      padding: 0;
      list-style-type: none;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
        img {
          width: 12%;
        }
        a {
          font-size: 12px;
          margin-left: 10px;
          color: #FFFFFF;
          @media screen and (max-width: 375px) {
            font-size: 9px;
          }
        }
      }
    }
    .sidebar__item {
      h4 {
        font-size: 14px;
        color: #FFFFFF;
        text-align: left;
      }
      ul {
        padding: 10px 0;
        text-align: left;
        li {
          color: #FFFFFF;
          margin-bottom: 10px;
          font-size: 12px;
          &:last-child {
            margin-bottom: 0;
          }
          &.list--active {
            svg {
              font-size: 8px;
              vertical-align: middle;
            }
            .sub__list {
              padding: 15px 0 0 15px;
              list-style-type: none;
            }
          }
        }
      }
    }
  }
  .toggle-nav {
    left: 0;
    opacity: 1;
  }
  //header scroll
  &--scroll {
    background-color: #01ADAB;
    position: fixed;
    top: 0;
    padding-top: 10px;
    width: 100%;
    z-index: 3;
    display: none;
    @media screen and (max-width: 500px) {
      display: none;
    }
    .header__middle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      .middle__logo {
        margin-right: 30px;
        img {
          width: 100%;
        }
      }
      .middle__search {
        width: 50%;
        position: relative;
        margin-right: 16px;
        input {
          width: 100%;
          padding: 8px 12px;
          border-radius: 5px;
          border: none;
        }
        .custom-class {
          position: absolute;
          right: 12px;
          top: 5px;
          color: gray;
          cursor: pointer;
        }
      }
      .middle__btn {
        display: flex;
        .btn__item {
          margin-right: 10px;
          padding: 5px;
          position: relative;
          border: none;
          border-radius: 5px;
          background-color: #FFFFFF;
          a {
            width: 110px;
            display: flex;
            align-items: center;
            span {
              margin-left: 5px;
              font-size: 13px;
            }
            .item__bard {
              display: block;
              position: absolute;
              right: -10px;
              top: -10px;
              height: 25px;
              width: 25px;
              border-radius: 50%;
              background-color: #FA434E;
              color: #F9FFFF;
              text-align: center;
              line-height: 20px;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
  &--scroll.show {
    display: block;
  }
}

</style>
