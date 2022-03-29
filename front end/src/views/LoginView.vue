<template>
  <div class="login-view">
    <form class="form">
      <h1>Connexion</h1>

      <div>
        <label for="email">E-mail</label>
        <input v-model="email" placeholder="Entrez votre adresse mail" type="email" id="email" class="form-control" required />
        <p id="emailErrorMsg"></p>
      </div>

      <div>
        <label for="password">Mot de passe</label>
        <input
          v-model="password"
          placeholder="Entrez votre mot de passe"
          type="password"
          id="password"
          class="form-control"
          pattern=".{8,16}"
          required
        />
      </div>

      <div class="buttonConnexion">
        <button @click.prevent="connexion()" class="btn btn-primary">Se connecter</button>
      </div>

      <div>
        <p>
          Pas encore de compte ?
          <router-link class="register-link" to="/register"
            >Inscrivez-vous ici !</router-link
          >
        </p>
      </div>
        <div class="modo-button">
          <button @click="moderateurViewConnexion()">
            Se connecter en tant que Modérateur
          </button>
        </div>
    </form>
  </div>
</template>

<script>
import authService from '../services/auth'

export default {
  name: 'LoginView',
  data () {
    return { email: '', password: '' }
  },
  methods: {
    connexion () {
      authService
        .login(this.email, this.password)
        .then((res) => {
          const tokenUser = res.data.token
          const userId = res.data.userId
          localStorage.setItem('token', tokenUser)
          localStorage.setItem('userId', userId)
          this.$router.push({ path: '/forum' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    moderateurViewConnexion () {
      this.$router.push({ path: '/moderateurconnexion' })
    }
  }
}
</script>

<style scoped>

.login-view {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 5%;
}

.errorMessage {
  color: red;
  text-align: right;
}

.form {
  color: #d4d4d4;
  backdrop-filter: brightness(0.4);
  width: 30%;
  text-align: center;
}

.form h1{
  padding-top: 10%;
  padding-bottom: 3%;
}

.form input{
  margin-left: 2%;
}

a.register-link {
    color: #d4d4d4;
}

a.register-link:hover {
    color: #d34f5c;
}

.moderateur-connexion-button {
  display: flex;
  justify-content: center;
}

.form .buttonConnexion button{
  background-color: #d34f5c;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #0c2045;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  line-height: 12px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.form .modo-button button{
  background-color: #d34f5c;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #0c2045;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  width: 50%;
  line-height: 12px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.form .buttonConnexion{
  padding-bottom: 3%;
  padding-top: 3%;
  text-align: center;
}

.form .modo-button{
  padding-bottom: 10%;
  padding-top: 3%;
}

.form button:hover,
.form button:focus {
  background-color: #0c2045;
  color: #d4d4d4;
}
</style>
