<template>
  <div class="modal"
       :class="{ show : show}"
       @click.self="closeModal('close')">
    <div class="modal__content">
      <!--Title-->
      <!--Icon close modal-->
      <span
          class="close"
          @click="closeModal('close')"
      >
        <i class="el-icon-close"/>
      </span>
      <!--Content-->
      <p
          v-if="errorMessage"
          v-html="errorMessage"
      />
      <!--Button group-->
      <div class="modal__content__btn-group">
        <!--Cancel-->
        <button
            size="small"
            class="btn-cancel"
            @click="closeModal('close')"
            v-text="'close modal'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: null
    }
  },
  methods: {
    // Close modal
    closeModal (param) {
      this.$emit('close-modal', param)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  text-align: center;

  &.show {
    display: flex;
  }

  .close {
    font-family: element-icons !important;
    color: #909399;
    position: absolute;
    top: 17px;
    right: 17px;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;

    &:hover {
      color: #409eff;
    }
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgb(0, 0, 0);
    opacity: 0.5;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 560px;
    min-height: 300px;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    @media screen and (max-width: 768px) {
      min-height: unset;
    }
    @media screen and (max-width: 576px) {
      width: calc(80%);
    }

    .title {
      font-size: 18px;
      margin-bottom: 30px;
    }

    &__btn-group {
      margin-top: 30px;
    }
  }

  &.modal__type-column {
    .modal {
      &__content__btn-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;

        .btn-confirm {
          margin-left: 0;
          margin-bottom: 20px;
        }

        .btn-cancel {
          order: 2;
          border: 0;
          &:hover, &:focus {
            background-color: transparent;
          }
        }
      }
    }
  }
}
</style>
