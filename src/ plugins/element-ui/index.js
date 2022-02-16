import Vue from 'vue'
import jaLocale from 'element-ui/lib/locale/lang/ja'
import locale from 'element-ui/lib/locale'

import {
  Pagination
} from 'element-ui'

// configure language
locale.use(jaLocale)

// import components
Vue.use(Pagination)
