<template>
  <div class="profile-view">
    <header>
      <div class="arrow-left" @click="backToForum()">⇦</div>
    </header>
    <div class="profile">
      <div class="info-user">
        <p>Mon Profil :</p>
        <div class="profile-user-info" v-if="user">
          <p>e-mail : {{ user.email }}</p>
          <p>Pseudo : {{ user.pseudo }}</p>
        </div>
      </div>
      <div class="buttons-setting">
        <button class="delete-user" @click="deleteUser()">Suprimer le compte</button>
        <button class="put-user" @click="togglePutUser()">
          Modifier mes identifiants
        </button>
      </div>
    </div>
    <put-user-template
      :revealUser="revealUser"
      :togglePutUser="togglePutUser"
      :user="user"
    ></put-user-template>
  </div>
</template>

<script>
import userService from '../services/user'
import putUserTemplate from '../components/UserTemplate.vue'

export default {
  name: 'ProfileView',
  components: { putUserTemplate },
  data () {
    return {
      profile: {},
      revealUser: false,
      user: ''
    }
  },
  mounted () {
    userService.getUser().then((user) => {
      console.log('message get profile:', user)
      this.user = user.data
    })
  },
  methods: {
    backToForum () {
      this.$router.push({ path: '/forum' })
    },
    togglePutUser () {
      this.revealUser = !this.revealUser
    },
    deleteUser () {
      if (
        window.confirm(
          'ATTENTION !!! \n La suppression de votre compte est irréversible, \n Voulez-vous vraiment supprimer votre compte ?'
        )
      ) {
        userService
          .deleteUser()
          .then((res) => {
            this.$router.push({ path: '/register' })
          })
          .catch((error) => console.log(error))
      }
    }
  }
}
</script>

<style scoped>

.arrow-left {
  color: rgb(255, 255, 255);
  font-size: 8rem;
  cursor: pointer;
}

.profile-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15% auto;
  height: auto;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: auto;
  margin: 0 auto;
  background-color: rgb(215, 221, 219);
  border: 2px solid rgb(156, 255, 64);
  border-radius: 15px;
}

.info-user {
  padding: 20px;
  font-size: 1.7rem;
  font-weight: 500;
  word-break: break-word;
}

.profile-user-info {
  font-style: italic;
}

.buttons-setting {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.delete-user {
  padding: 8px 15px;
  margin: 0 10px;
  width: auto;
  background-color: rgb(255, 108, 108);
  color: white;
  word-break: break-word;
}

.put-user {
  padding: 8px 15px;
  margin: 0 10px;
  width: auto;
  word-break: break-word;
}

button {
  outline: none;
  cursor: pointer;
  color: rgb(0, 0, 0);
  background-color: rgb(195, 248, 48);
  width: 50%;
  margin: 2px 7px;
  padding: 5px 10px;
  border-radius: 15px;
  padding: 5px 10px;
  white-space: nowrap;
}

@media (max-width: 785px) {
  .profile-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30% auto;
    height: auto;
  }

  .buttons-setting {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .delete-user {
    padding: 8px 15px;
    margin: 10px 0;
    width: 100%;
    background-color: rgb(255, 108, 108);
  }

  .put-user {
    padding: 8px 15px;
    margin: 10px 0;
    width: 100%;
  }
}
</style>
