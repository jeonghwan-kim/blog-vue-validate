const tag = '[Validator]'

const validateFns = {
  required (key, val) {
    if (!val) {
      return `${key} is required`
    }
  },
  minLen3 (key, val) {
    if (!val || val.length < 3) {
      return `${key} should have more than 3 letters`
    }
  }
}

const validator = {
  init () {
    this.errors = {}
    this.validates = new Map()
    return this
  },

  setup (key, expression) {
    const validates = expression.replace(/'/g, '').split('|')
    this.validates.set(key, validates)
  },

  validate (key, value) {
    const validates = this.validates.get(key)
    const errors = validates
      .map(v => validateFns[v](key, value))
      .filter(v => !!v)
    
    return errors
  }
}

export default validator.init()
