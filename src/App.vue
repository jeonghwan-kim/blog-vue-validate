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

import validator from './validator'

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
      this.errorBag.name = validator.validate('name', val)
    }
  },
  methods: {
    onSubmit() {
      this.errorBag.name = validator.validate('name', this.name)
    }
  }
}
</script>
