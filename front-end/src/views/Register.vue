<template>
<div class="Register">          
  <form class="text-center col-md-12 mt-5" action="" method="POST">
      <h2 class="m-4">S'inscrire</h2>
      <div class="d-inline-flex flex-column col-4">
          <label class="text-end my-3 col-11" for="login">Login</label>
          <label class="text-end my-3 col-11" for="password">Mot de passe</label>
          <label class="text-end my-3 col-11" for="password">Confirmation mot de passe</label>
          <label class="text-end my-3 col-11" for="lastname">Nom</label>
          <label class="text-end my-3 col-11" for="firsname">Prénom</label>
      </div>
      <div class="d-inline-flex flex-column col-8 col-md-6">
          <input class="my-3 col-9 col-md-6" type="text" placeholder="Choisir un login unique" name="login" required>
          <input class="my-3 col-9 col-md-6" type="password" placeholder="Choisir un mot de passe" name="password" required>
          <input class="my-3 col-9 col-md-6" type="password" placeholder="Confirmer le mot de passe" name="password" required>
          <input class="my-3 col-9 col-md-6" type="password" placeholder="Entrer un nom" name="lastname" required>
          <input class="my-3 col-9 col-md-6" type="password" placeholder="Entrer un prénom" name="firstname" required>
      </div>
      <div class="col-12">
          <button class="btn-login my-4 p-1 col-9">Login</button>
      </div>
  </form>
  <p class="text-center col-md-12">Vous avez déjà un compte ?<br><router-link to="/">Se connecter</router-link></p>
</div>         
</template>

<script>
export default {
  name: 'Register',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn-login {
    border-radius: 15px;
    max-width: 120px;
}
</style>
