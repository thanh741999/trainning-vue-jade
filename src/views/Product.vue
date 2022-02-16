<template>
  <div class="product">
    <div class="product-breadcrumb container">
      <ul>
        <li>Trang chủ</li>
        <li>
          <chevron-right-icon size="1.5x" class="custom-class"/>
          {{displayBreadCrumb}}
        </li>
      </ul>
    </div>
    <div class="product-content container">
      <div class="sidebar" v-if="sidebar">
        <div class="sidebar-filter sidebar-bg">
          <h2>Danh Mục Sản Phẩm</h2>
          <ul>
            <li @click="setProductBySideBar(item)" :class="[SidebarActive === item.id ? 'active': '']" v-for="(item,index) in sidebar" :key="index">
              <chevron-right-icon size="1.5x"/>{{item.name}}
            </li>
          </ul>
        </div>
        <div class="sidebar-sale sidebar-bg">
          <h2><img src="@/assets/img/fire-red2x.png" alt="">Sản Phẩm Khuyến Mãi</h2>
          <ul>
            <li v-for="(item,index) in SidebarRandomProductId" :key="index">
              <img :src="item.images[0].url" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="main-content">
        <!--    Banner    -->
        <div class="banner">
          <VueSlickCarousel v-if="banner" v-bind="slickOptions">
            <div class="item" v-for="(item,index) in banner" :key="index">
              <img :src="item.image.url" alt="">
            </div>
          </VueSlickCarousel>
        </div>
        <!--     End Banner     -->

        <!--    Sort      -->
        <div class="sort">
          <span>Ưu tiên xem: </span>
          <button @click="setProductBySort('asc')" :class="[activeSort === 'asc' ? 'active' : '']">GIÁ TĂNG</button>
          <button @click="setProductBySort('desc')" :class="[activeSort === 'desc' ? 'active' : '']">GIÁ GIẢM</button>
          <button @click="setProductBySort('sort-by-sale')" :class="[activeSort === 'sort-by-sale' ? 'active' : '']">KHUYẾN MÃI</button>
        </div>
        <!--    End Sort    -->
        <template>
          <div class="list-product">
            <div class="list-product-content" v-if="product">
              <router-link tag="div" :to="{name: 'ProductDetail',params: {id: item.id}}" class="content__item" v-for="(item,index) in product" :key="index">
                <div class="item__img">
                  <div class="img__size" v-for="(imgUrl,index) in item.images" :key="index">
                    <img :src="imgUrl.url" alt="">
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
        <Pagination :total="pagination.total"
                    :current-page="pagination.currentPage"
                    :page-size="pagination.perPage"
                    :disable="disable"
                    @handleCurrentChange="test"/>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { ChevronRightIcon } from 'vue-feather-icons'
import VueSlickCarousel from 'vue-slick-carousel'
import Pagination from '@/components/Pagination'
import {
  GetCategory
} from '@/service/product.service'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Product',
  components: {
    ChevronRightIcon,
    VueSlickCarousel,
    Pagination
  },
  data () {
    return {
      SidebarRandomProductId: [],
      SidebarActive: 1,
      disable: false,
      slickOptions: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      }
    }
  },
  props: {
    SearchProduct: {
      type: String,
      default: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    const data = {
      id: 1
    }
    store.dispatch('product/setProduct', data).then(_ =>
      GetCategory().then((res) => {
        store.commit('sidebar/setSidebar', res.data)
      }).then(_ => {
        store.dispatch('banner/setBanner')
        next()
      })
    ).catch((error) => {
      console.log(error)
    })
  },
  computed: {
    ...mapState('sidebar', ['sidebar']),
    ...mapState('product', ['pagination', 'product', 'BreadCrumb', 'loading', 'activeSort']),
    ...mapState('banner', ['banner']),
    displayBreadCrumb () {
      if (this.BreadCrumb === 1) {
        return 'Thuốc không kê toa'
      } else if (this.BreadCrumb === 2) {
        return 'Thực phẩm chức năng'
      } else if (this.BreadCrumb === 3) {
        return 'Dụng cụ y khoa'
      } else if (this.BreadCrumb === 4) {
        return 'Mỹ phẩm'
      } else return 'Mẹ & bé'
    }
  },
  created () {
    this.RandomSaleProduct()
    store.watch(
      (state) => {
        return store.getters['product/BreadCrumb']
      },
      (newValue, oldValue) => {
        this.SidebarActive = newValue
      },
      {
        deep: true
      }
    )
  },
  methods: {
    ...mapActions('product', ['setProductBySort', 'setProductBySideBar']),
    DiscountPrice (discount, price) {
      if (discount !== 'No') {
        const dis = discount.slice(0, -1)
        return price - ((price * dis) / 100)
      }
    },
    RandomSaleProduct () {
      for (let i = 0; i <= 2; i++) {
        const item = Math.floor(Math.random() * (this.product.length))
        this.SidebarRandomProductId.push(this.product[item])
      }
    },
    test (val) {
      if (this.activeSort) {
        const data = {
          id: val,
          string: this.activeSort
        }
        this.disable = true
        store.dispatch('product/setProductByPaginationSort', data)
      } else {
        const data = {
          id: val
        }
        this.disable = true
        store.dispatch('product/setProduct', data)
      }
      setTimeout(() => {
        this.disable = false
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  background-color: #E2E3E4;
  padding: 16.6px 0;
  @media screen and (max-width: 500px) {
    padding-top: 130px;
  }
  &-breadcrumb {
    margin-bottom: 15px;

    ul {
      display: flex;

      li {
        margin-right: 12px;
        color: #808081;
        font-size: 12px;
        display: flex;
        align-items: center;

        &:last-child {
          color: #505050;
        }

        i {
          margin-right: 10px;
        }
      }
    }
  }

  &-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .sidebar {
      width: 20%;
      @media screen and (max-width: 768px) {
        width: 25%;
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        margin-bottom: 20px;
      }
      &-bg{
        background-color: #FFFFFF;
        padding: 15px 0;
        @media screen and (max-width: 768px) {
          padding: 10px 0;
        }
      }

      h2 {
        font-size: 15px;
        font-weight: bold;
        padding: 0 15px 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid #EBEBEB;
        @media screen and (max-width: 768px) {
          padding: 0 10px 10px;
        }
      }

      &-filter {
        margin-bottom: 15px;
        ul {
          padding: 0 15px;
          @media screen and (max-width: 768px) {
            padding: 0 10px;
          }
          li {
            font-size: 14px;
            color: #505050;
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            cursor: pointer;
            @media screen and (max-width: 768px) {
              font-size: 13px;
            }
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
      }

      &-sale {
        h2 {
          display: flex;
          align-items: center;
          border-bottom: none;
          margin-bottom: 0;
          img {
            display: block;
            margin-right: 5px;
          }
        }
        ul {
          li {
            border-top: 1px solid #707070;
            padding: 10px;
            img {
              width: 100%;
              @media screen and (max-width: 500px) {
                display: block;
                width: 50%;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }

    .main-content {
      width: calc((100% - 20%) - 15px);
      @media screen and (max-width: 768px) {
        width: calc((100% - 25%) - 15px);
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
      }
      margin-left: 15px;

      .banner {
        margin-bottom: 20px;
        .slick-slider.slick-initialized {
          width: 100%;

          .item {
            border-radius: 25px;

            img {
              width: 100%;
              height: 300px;
              object-fit: cover;
              border-radius: 25px;
              @media screen and (max-width: 768px) {
                height: 260px;
              }
              @media screen and (max-width: 500px) {
                height: 158px;
              }
              @media screen and (max-width: 320px) {
                height: 100px;
              }
            }
          }
        }
      }

      .sort {
        margin-bottom: 25px;

        span {
          color: #505050;
          margin-right: 15px;
          font-size: 14px;
          @media screen and (max-width: 375px) {
            font-size: 10px;
            margin-right: 10px;
          }
        }

        button {
          background-color: #FFFFFF;
          padding: 3px 11px 6px;
          margin-right: 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          @media screen and (max-width: 500px) {
            font-size: 13px;
            margin-right: 10px;
          }
          @media screen and (max-width: 375px) {
            font-size: 10px;
            padding: 3px 6px 6px;
          }
        }

        button.active {
          background-color: #FA434E;
          color: #FFFFFF;
        }
      }

      .list-product {
        background-color: #ffffff;
        padding: 0;
        margin-bottom: 25px;

        &-content {
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
            width: calc(100% / 4);
            cursor: pointer;
            position: relative;
            padding: 40px 20px 20px;
            outline: 1px solid #E5E5E4;
            @media screen and (max-width: 768px) {
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
    }
  }
}
</style>
