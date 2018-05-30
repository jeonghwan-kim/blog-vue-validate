import MyDirectives from './MyDirectives'

const tag = '[MyPlugin]'

export default {
  install (Vue) {
    console.log(tag, 'install()')

    Vue.directive('validate', MyDirectives.validate)

    Vue.mixin({
      data() {
        return {
          errorBag: {}
        }
      },
      computed: {
        errors() {
          const errorBag = this.errorBag || {}

          return {
            has(key) {
              return !!errorBag[key]
            },
            first(key) {
              return errorBag[key][0]
            }
          }
        }
      }
    })
  }
}