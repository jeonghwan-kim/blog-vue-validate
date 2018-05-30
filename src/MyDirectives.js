import validator from './validator'

const tag = '[directives]'

export default {
  validate: {
    bind (el, binding, vnode) {
      console.log(tag, 'bind()')

      validator.setup(el.name, binding.expression, vnode.context)
    },

    update (el, binding, vnode) {
      console.log(tag, 'update()')
      const key = el.name
      const errors = validator.validate(key, el.value)

      if (errors.length) {
        vnode.context.errorBag[key] = errors
      } else {
        delete vnode.context.errorBag[key]
      }

      vnode.context.errorBag.ts = Date.now()
    }
  }
}