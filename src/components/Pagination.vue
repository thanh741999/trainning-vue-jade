<template>
  <div class="pagination">
    <el-pagination
        :layout="layout"
        :page-size="pageSize"
        :pager-count="pagerCount"
        :current-page="currentPage"
        :total="total"
        :disabled="disable"
        @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    layout: {
      type: String,
      default: 'prev, pager, next'
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    currentPage: {
      type: Number,
      default: 1
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  text-align: right;
  padding: 10px 0;
}
</style>
