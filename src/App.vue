<template>
  <div id="app">
    <form>
      <input type="text" name="name" v-model="name" v-validate="'required|minLen3'">
      <span v-if="errors.has('name')">{{errors.first('name')}}</span>
      <pre>{{errorBag}}</pre>
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
  updated() {
    console.log(tag, 'updated()')
  }
}
</script>
