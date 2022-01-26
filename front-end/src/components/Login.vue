<template>
    <div class="login">
        <form  class="text-center col-md-12 mt-5" action="" method="POST">
            <h2 class="m-4">Se connecter</h2>
            <div class="d-inline-flex flex-column col-4">
                <label class="text-end my-3 col-11" for="login">Login</label>
                <label class="text-end my-3 col-11" for="password">Mot de passe</label>
            </div>
            <div class="d-inline-flex flex-column col-8 col-md-6">
                <input class="my-3 col-9 col-md-6" type="text" placeholder="Entrer un login unique" name="login" required>
                <input class="my-3 col-9 col-md-6" type="password" placeholder="Entrer un mot de passe" name="password" required>
            </div>
            <div class="form-check col-3 m-auto">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label text-start" for="flexCheckDefault">
                    Rester connecté
                </label>
            </div>
            <div class="col-12">
                <button class="btn-login my-4 p-1 col-9">Login</button>
            </div>
        </form>
        
    </div>
</template>

<script>
export default {
    name: 'Login', 
}
</script>

<style lang="scss" scoped>
.btn-login {
    border-radius: 15px;
    max-width: 120px;
}
</style>