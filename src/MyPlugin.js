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
        $errors () {
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

        $validator () {
          const errorBag = this.errorBag || {}

          return {
            validateAll() {
              for (const key of validator.validates.keys()) {
                const errors = validator.validate(key, this[key])
                if (errors.length) {
                  errorBag[key] = errors
                } else {
                  delete errorBag[key]
                }
              }

              errorBag.ts = Date.now()
            }
          }
        }
      }
    })
  }
}