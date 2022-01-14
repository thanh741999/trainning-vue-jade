<template>
  <div class="online">
    <div class="online__header">
      <h4>Mua Thuốc Theo Toa Trực Tuyến</h4>
      <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
        web
        designs.</p>
    </div>
    <div class="online__content">
      <div class="content__item">
        <img src="@/assets/img/online-mobile-phone.png" alt="mobile phone">
        <h4 class="item__title">CHỤP HÌNH <br> TOA THUỐC</h4>
        <p>Và tải ảnh lên website hoặc <br>ứng dụng Jio Health.</p>
      </div>
      <div class="content__item content__middle">
        <img src="@/assets/img/online-message.png" alt="message">
        <h4 class="item__title">DƯỢC SĨ <br> TƯ VẤN</h4>
        <p>Các dược sĩ kinh nghiệm sẽ gọi<br> điện tư vấn và xác nhận đơn thuốc.</p>
      </div>
      <div class="content__item">
        <img src="@/assets/img/online-item-ship.png" alt="item ship">
        <h4 class="item__title">GIAO HÀNG NHANH <br> TRONG 4H</h4>
        <p>Trong khu vực nội thành Thành <br> Phố Hồ Chí Minh</p>
      </div>
    </div>
    <button><img src="@/assets/img/toa--white2x.png" alt="toa">Tạo toa thuốc ngay</button>
  </div>
</template>

<script>
export default {
  name: 'BuyMedicineOnline'
}
</script>

<style lang="scss" scoped>
.online {
  padding: 17px 10px 38px 34px;
  background-color: #ffffff;

  &__header {
    h4 {
      color: #505050;
      font-size: 22px;
    }

    p {
      color: #777777;
      font-size: 12px;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 30px;
    padding-bottom: 36.8px;
    @media screen and (max-width: 500px) {
      padding-bottom: 20px;
    }
    .content__item {
      padding: 20px;
      width: (100% / 3);
      text-align: center;
      @media screen and (max-width: 768px) {
        padding: 0 15px;
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        border-bottom: 2px solid #E5E5E4;
        margin-bottom: 15px;
        &:last-child {
          border-bottom: none;
        }
      }
      .item__title {
        margin: 16px 0;
        font-size: 22px;
        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
      }

      p{
        font-size: 15px;
        @media screen and (max-width: 768px) {
          font-size: 13px;
        }
      }
    }

    .content__middle {
      border-left: 1px solid #E5E5E4;
      border-right: 1px solid #E5E5E4;
      @media screen and (max-width: 500px) {
        border-left: none;
        border-right: none;
      }
    }
  }

  button {
    display: block;
    text-align: center;
    background-color: #FA434E;
    color: #ffffff;
    font-size: 15px;
    border-radius: 5px;
    padding: 6px 15px 9px;
    margin: 0 auto;

    img {
      margin-right: 10px;
    }
  }
}

</style>
