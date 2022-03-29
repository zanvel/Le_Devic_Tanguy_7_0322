<template>
  <div class="login-moderateur-view">
    <form class="form">
      <h1>Connexion Modérateur</h1>

      <div>
        <label for="email">E-mail</label>
        <input
          v-model="email"
          type="email"
          id="moderateurEmail"
          class="form-control"
          placeholder="Entrer l'adresse e-mail du modérateur"
        />
      </div>

      <div>
        <label for="password">Mot de passe</label>
        <input
          v-model="password"
          type="password"
          name="moderateurPassword"
          id="moderateurPassword"
          class="form-control"
          pattern=".{8,16}"
          placeholder="Entrer le mot de passe du modérateur"
        />
      </div>
      <div class="connexionModo">
        <button @click.prevent="connexionModerateur()" class="btn btn-primary">
        Se connecter en tant que modérateur
      </button>
      </div>
      <div class="connexion">
        <p>
          Pas de compte modérateur ?
          <router-link class="connexion-link" to="/">Connectez vous ici !</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import userAuth from '../services/auth'

export default {
  name: 'moderateurConnexion',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    connexionModerateur () {
      userAuth
        .login(this.email, this.password)
        .then((master) => {
          const token = master.data.token
          const userId = master.data.userId
          localStorage.setItem('token', token)
          localStorage.setItem('userId', userId)
          alert('Bienvenue modérateur !')
          this.$router.push({ path: '/forum' })
        })
        .catch()
    }
  }
}
</script>

<style scoped>

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

a.connexion-link {
    color: #d4d4d4;
}

a.connexion-link:hover {
    color: #d34f5c;
}

.login-moderateur-view {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 5%;
}

.form input{
  margin-left: 2%;
  margin-top: 2%;
}

.form .connexionModo button{
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

.form .connexionModo{
  padding-top: 3%;
}

.form button:hover,
.form button:focus {
  background-color: #0c2045;
  color: #d4d4d4;
}

.form .connexion{
  padding-bottom: 10%;
  padding-top: 3%;
}

</style>
