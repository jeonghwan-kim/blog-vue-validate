const validateFns = {
  required (val, name) {
    if (!val) {
      return `${name} is required`
    }
  },
  minLen3 (val, name) {
    if (!val || val.length < 3) {
      return `${name} should have more than 3 letters`
    }
  }
}

class Validator {
  constructor () {
    this.errors = {}
    this.validates = new Map()
  }

  setup (key, expression) {
    const validates = expression.replace(/'/g, '').split('|')
    this.validates.set(key, validates)
  }

  validate (key, value) {
    const validates = this.validates.get(key)
    return validates
      .map(v => validateFns[v](value, key))
      .filter(v => !!v)
  }
}

export default new Validator()
