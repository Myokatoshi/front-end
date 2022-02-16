<template>
  <div id="app">
    <headers/>

    <router-view/>
    <footers/>
  </div>  
</template>


<script>
import Headers from './components/Headers.vue'
import Footers from './components/Footers.vue'


export default {
    name: 'App',
    components: {
    Headers,
    Footers
  }
}
</script>

<style lang="scss">

</style>
