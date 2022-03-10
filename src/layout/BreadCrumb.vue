<template>
  <div class="main" v-if="ListBreadcrumb">
    <div class="breadcrumb container">
      <ul>
        <li v-for="(Breadcrumb,index) in ListBreadcrumb" :key="index">
          {{Breadcrumb.title}}
          <span v-if="index < ListBreadcrumb.length-1"><chevron-right-icon size="1.5x" class="custom-class"/></span>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons'
export default {
  name: "BreadCrumb",
  components: {
    ChevronRightIcon
  },
  data () {
    return {
      BreadCrumb: null
    }
  },
  computed: {
    ListBreadcrumb () {
      console.log(this.$route.meta.BreadCrumb)
      if (this.$route.meta.BreadCrumb) {
        let list = [...this.$route.meta.BreadCrumb]
        if (this.$route.params.name) {
          list.push({name: 'Product', title: this.$route.params.name})
        }
        return list
      }
    }
  },
  // created() {
  //   this.test()
  // },
  // methods: {
  //   test () {
  //     console.log(this.$route.meta.BreadCrumb)
  //     if (this.$route.meta.BreadCrumb) {
  //       this.BreadCrumb= this.$route.meta.BreadCrumb
  //       this.BreadCrumb.push({name: 'Product', title: this.$route.params.name})
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #e9ecef;
  .breadcrumb {
    margin-bottom: 0;
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
}

</style>