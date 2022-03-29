<template>
  <div class="register-view">
    <form class="form" @submit.prevent="register">
      <h1>Inscription</h1>

      <div>
        <label for="email">E-mail</label>
        <input v-model="email" type="email" id="email" class="form-control" required />
        <p id="emailErrorMsg">{{ emailErrorMsg }}</p>
        <p class="sameEmail">{{ sameEmail }}</p>
      </div>

      <div>
        <label for="pseudo">Pseudo</label>
        <input
          v-model="pseudo"
          type="text"
          id="pseudo"
          pattern="[a-zA-Z0-9]{4,12}"
          title="Merci de sélectionner 4 à 12 caractères"
          class="form-control"
          required
        />
        <p id="pseudoErrorMsg">{{ pseudoErrorMsg }}</p>
        <p class="samePseudo">{{ samePseudo }}</p>
      </div>

      <div>
        <label for="password">Mot de passe</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="form-control"
          pattern=".{8,16}"
          title="8 à 16 caractères sont requis"
          required
        />
      </div>

      <div class="submit-button">
        <button type="submit" @click="submit">
              Créer un compte
        </button>
      </div>

      <div class="connexion">
        <p>
          Déjà un compte ?
          <router-link class="connexion-link" to="/">Connectez vous !</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import authService from '../services/auth'

export default {
  name: 'RegisterView',
  data () {
    return {
      email: '',
      pseudo: '',
      password: '',
      emailErrorMsg: '',
      pseudoErrorMsg: '',
      samePseudo: '',
      sameEmail: ''
    }
  },
  methods: {
    register () {
      const user = {
        email: this.email,
        pseudo: this.pseudo,
        password: this.password
      }
      authService
        .register(user)
        .then((res) => {
          alert('Vous êtes maintenant inscrit ! Bravo 😃 !')
          this.$router.push({ path: '/' })
        })
        .catch((err) => {
          this.sameEmail = err.response.data.emailMessage
          this.samePseudo = err.response.data.pseudoMessage
        })
    }
  }
}
</script>

<style scoped>
*,
::before,
::after {
  padding: 0;
  margin: 0;
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

a.connexion-link {
    color: #d4d4d4;
}

a.connexion-link:hover {
    color: #d34f5c;
}

.register-view {
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

.form .submit-button button{
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

.form .submit-button{
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

.samePseudo,
.sameEmail {
  font-size: 1.2rem;
  color: red;
}
</style>
