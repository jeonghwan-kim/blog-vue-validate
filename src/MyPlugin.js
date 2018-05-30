import MyDirectives from './MyDirectives'
import validator from './validator'

const tag = '[MyPlugin]'

export default {
  install (Vue) {
    console.log(tag, 'install()')

    Vue.directive('validate', MyDirectives.validate)

    Vue.mixin({
      data() {
        return {
          errorBag: {
            ts: Date.now()
          }
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
        },
        validator() {
          const errorBag = this.errorBag || {}

          return {
            validateAll() {
              const errors = validator.validate('name', this.name)

              if (errors.length) {
                errorBag.name = errors
              } else {
                delete errorBag.name
              }
              
              errorBag.ts = Date.now()
            }
          }
        }
      }
    })
  }
}