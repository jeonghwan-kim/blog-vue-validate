import validator from './validator'

const tag = '[MyDirectives]'

export default {
  validate: {
    bind (el, binding, vnode) {
      console.log(tag, 'bind()')
      validator.setup(el.name, binding.expression)
    },

    update (el, binding, vnode) {
      console.log(tag, 'update()')
      const key = el.name
      const errors = validator.validate(key, el.value)
      
      if (errors.length) {
        vnode.context.errorBag[el.name] = errors
      } else {
        delete vnode.context.errorBag[el.name]
      }
      
      vnode.context.errorBag.ts = Date.now()
    }
  }
}