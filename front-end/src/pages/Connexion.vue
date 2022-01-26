<template>
    <div class="connexion">
        <headers/>
        <login/>
    </div>
</template>

<script>
import Headers from '../components/Headers.vue'
import Login from '../components/Login.vue' 

export default {
    name: 'Connexion',
    components: {
    Headers,
    Login  
  }
}
</script>

<style lang="scss" scoped>

</style>