<template>          
  <form class="mx-auto col-md-12" action="" method="POST">
      <h2>S'inscrire</h2>
      <label for="">Login</label>
      <input type="text" placeholder="Entrer un login unique" name="login" required><br>

      <label for="">Mot de passe</label>
      <input type="password" placeholder="Entrer un mot de passe" name="password" required>
  </form>       
</template>

<script>
export default {
  name: 'Register',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
