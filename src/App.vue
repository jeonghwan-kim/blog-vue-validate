<template>
  <div id="app">
    <form @submit.prevent="onSubmit">
      <input type="text" name="name" v-model="name" v-validate="'required|min:3'">
      <p v-if="errors.has('name')">{{errors.first('name')}}</p>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
const tag = '[App]'

export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll()
    }
  }
}
</script>
