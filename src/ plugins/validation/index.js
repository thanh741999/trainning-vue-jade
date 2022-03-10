import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend, configure } from "vee-validate";
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages[rule] // assign message
    })
})
// change default message
// extend('required', {
//     ...rules.required,
//     message: 'fields errors。'
// })
extend('phone_number', {
    validate (value) {
        return /^[0-9]{10}$/.test(value)
    },
    message: 'phone is number and length is 10 number'
})
extend('name', {
    validate (value) {
        // console.log(/^[a-zA-Z0-9]{6,32}$/.test(value))
        return /^[a-zA-Z0-9]{6,32}$/.test(value)
    },
    message: 'minimum is 6 character'
})
// with typescript
for (let [rule, validation] of Object.entries(rules)) {
    extend(rule, {
        ...validation
    })
}


Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

configure({
    defaultMessage: (field, values) => {
        return values
    }
})