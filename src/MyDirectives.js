const tag = '[MyDirectives]'
const validateFns = {
  required (val, name) {
    if (!val) {
      return `${name} is required`
    }
  },
  minLen3 (val, name) {
    if (val.length < 3) {
      return `${name} should have more than 3 letters`
    }
  }
}

class Validator {
  constructor () {
    this.errors = {}
    this.validator = new Map()
    this._updateTimestamp()
  }

  _updateTimestamp () {
    this.errors.updatedAt = Date.now()
  }

  setup (el, binding, vnode) {
    this._setValidator(el.name, binding.expression)
    this._setErrorToVm(vnode.context)
  }

  _setValidator(key, expression) {
    const validates = expression.replace(/'/g, '').split('|')
    this.validator.set(key, validates)
  }

  _setErrorToVm(context) {
    context.errorBag = this.errors
  }

  validate (el, binding, vnode) {
    const key = el.name
    const validates = this.validator.get(key)
    const errors = validates
      .map(v => validateFns[v](el.value, key))
      .filter(v => !!v)
    
    this._updateError(errors, key)
  }

  _updateError(errors, key) {
    if (errors.length) {
      this.errors[key] = errors
    } else {
      delete this.errors[key]
    }

    this._updateTimestamp()
  }
}

const validator = new Validator()

export default {
  validate: {
    bind (el, binding, vnode) {
      console.log(tag, 'bind()')
      validator.setup(el, binding, vnode)
    },

    inserted (el, binding, vnode) {
      console.log(tag, 'inserted()')     
    },

    update (el, binding, vnode) {
      console.log(tag, 'update()')
      validator.validate(el, binding, vnode)
    }
  }
}