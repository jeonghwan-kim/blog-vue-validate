export default {
  validate (key, val) {
    const errors = []
    
    if (!val) {
      errors.push(`${key} field is required`)
    } else {
      if (val.length < 3) errors.push(`${key} filed should have length of 3`)
    }
    
    return errors
  }
}