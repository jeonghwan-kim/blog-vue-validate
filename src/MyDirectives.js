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