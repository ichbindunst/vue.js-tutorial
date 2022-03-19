<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar></Navbar>
  </div>
</template>


<script>
import Narvbar from './Navbar'

export default({
  name: 'app',
  components: {
    Navbar
  },

  data() {
    return {
      title: 'My first Vue app, wooooo :)'
    }
  }  
})
</script>

<style>

</style>