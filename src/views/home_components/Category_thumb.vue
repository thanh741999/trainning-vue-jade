<template>
  <div class="menu container">
    <div class="menu__item menu_bg-1" @click="scrollToElement('medicine')">
      <img src="@/assets/img/thuoc-2x.png" alt="iconmedicine">
      <p>Thuốc Không Kê Đơn</p>
    </div>
    <div class="menu__item menu_bg-2" @click="scrollToElement('food')">
      <img src="@/assets/img/thucpham-2x.png" alt="iconfood">
      <p>Thực Phẩm Chức Năng</p>
    </div>
    <div class="menu__item menu_bg-3" @click="scrollToElement('consumers')">
      <img src="@/assets/img/tieudung-2x.png" alt="icontieudung">
      <p>Hàng Tiêu Dùng</p>
    </div>
    <div class="menu__item menu_bg-4" @click="scrollToElement('headlth')">
      <img src="@/assets/img/mypham-2x.png" alt="controlmypham">
      <p>Mỹ Phẩm</p>
    </div>
    <div class="menu__item menu_bg-5" @click="scrollToElement('trademark')">
      <img src="@/assets/img/yte-2x.png" alt="controlyte">
      <p>Dụng Cụ Y Tế</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Category_thumb',
  methods: {
    scrollToElement (Elename) {
      this.$emit('scrollToElement', Elename)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 25px 30px;
  background-color: unset;
  @media screen and (max-width: 500px) {
    justify-content: space-between;
    padding: 25px 10px;
  }
  &__item {
    background-image: url("../../assets/img/control_page-1-2x.png");
    width: calc(100% / 5 - 20px);
    height: 147px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    text-align: center;
    position: relative;
    margin: 0 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    @media screen and (max-width: 1024px) {
      width: calc(100% / 3 - 20px);
      margin-bottom: 15px;
    }
    @media screen and (max-width: 500px) {
      width: calc(100% / 2 - 10px);
      margin: 0 0 15px 0;
    }
    @media screen and (max-width: 375px) {
      height: 120px;
    }
    &:hover {
      opacity: .8;
    }
    p {
      font-size: 16.7px;
      color: #FFFFFF;
      @media screen and (max-width: 375px) {
        font-size: 12px;
      }
    }

    .item__content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(50%,50%);
      color: #FFFFFF;
      font-size: 16.7px;
      text-align: center;
      display: block;

      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
  @for $i from 1 through 5 {
    .menu_bg-#{$i} {
      background-image: url("../../assets/img/control_page-#{$i}-2x.png");
    }
  }
}

</style>
