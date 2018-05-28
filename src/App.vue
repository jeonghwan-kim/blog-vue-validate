<template>
  <div id="app">
    <form>
      <input type="text" name="name" v-model="name" v-validate="'required|minLen3'">
      <span v-if="errors.name">{{errors.name[0]}}</span>
      <pre>{{errors}}</pre>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import directives from './directives'

export default {
  name: 'app',
  directives,
  data () {
    return {
      name: null,
      errors: {}
    }
  },
  updated() {
    console.log('App:updated')
  }
}
</script>

<style>
</style>
