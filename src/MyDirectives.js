import validator from './validator'

const tag = '[directives]'

export default {
  validate: {
    bind (el, binding, vnode) {
      console.log(tag, 'bind()')

      validator.setup(el.name, binding.expression, vnode.context)
    },

    update (el, binding, vnode, oldNode) {
      console.log(tag, 'update()', JSON.stringify(vnode.context.errorBag))

      const key = el.name
      const errors = validator.validate(key, el.value)
      const s = JSON.stringify

      if (s(errors) === s(vnode.context.errorBag[key])) return 

      if (errors.length) {
        vnode.context.$set(vnode.context.errorBag, key, errors)
      } else {
        vnode.context.$delete(vnode.context.errorBag, key)
      }
    }
  }
}