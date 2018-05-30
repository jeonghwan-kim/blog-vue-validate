<template>
  <div id="app">
    <form @submit.prevent="onSubmit">
      <input v-model="name">
      <p v-if="errorBag.name">{{errorBag.name[0]}}</p>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>

const Validator = {
  validate (val) {
    const errors = []
    
    if (!val) {
      errors.push('name field is required')
    } else {
      if (val.length < 3) errors.push('name filed should have length of 3')
    }
    
    return errors
  }
}

export default {
  data () {
    return {
      name: '',
      errorBag: {
        name: []
      }
    }
  },
  watch: {
    name (val) {
      this.errorBag.name = Validator.validate(val)
    }
  },
  methods: {
    onSubmit() {
      this.errorBag.name = Validator.validate(this.name)
    }
  }
}
</script>
