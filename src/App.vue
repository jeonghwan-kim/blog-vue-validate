<template>
  <div id="app">
    <form @submit.prevent="onSubmit">
      <input name="name" v-model="name" v-validate="'required|minLen3'">
      <p v-if="errorBag.name">{{ errorBag.name[0] }}</p>
      <button type="submit">Submit</button>
    </form>
    <pre>{{errorBag}}</pre>
  </div>
</template>

<script>
import directives from './MyDirectives'
import validator from './validator'

export default {
  directives,
  data () {
    return {
      name: '',
      errorBag: {}
    }
  },
  methods: {
    onSubmit() {
      const errors = validator.validate('name', this.name)
      if (errors) {
        this.$set(this.errorBag, 'name', errors)
      } else {
        this.$delete(this.errorBag, 'name')
      }
    }
  }
}
</script>
