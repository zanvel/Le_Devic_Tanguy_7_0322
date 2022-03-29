<template>
  <header>
    <div class="main-brand">
      <img :src="logoGroupomania"/>
    </div>
    <div class="log-status">
      <button class="profile" @click="myProfile()">Mon Profil</button>
      <button class="logout" @click="logout()">Déconnexion</button>
      <button class="login" @click="directLogin()">Connexion</button>
      <button class="register" @click="directRegister()">Inscription</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-top',
  data () {
    return { logoGroupomania: require('../assets/icon-left-font-monochrome-black.svg') }
  },
  mounted () {
    const hasTokenUser = localStorage.getItem('token')
    const login = document.querySelector('.login')
    const register = document.querySelector('.register')
    const logout = document.querySelector('.logout')
    if (hasTokenUser) {
      login.style.display = 'none'
      register.style.display = 'none'
    } else {
      logout.style.display = 'none'
      login.style.display = 'block'
      register.style.display = 'block'
    }
  },
  methods: {
    directRegister () {
      this.$router.push({ path: '/register' })
    },
    directLogin () {
      this.$router.push({ path: '/' })
    },
    myProfile () {
      this.$router.push({ path: '/profile' }).catch(() => {})
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('moderateur')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #d34f5c;
  background-color: #d4d4d4;
}

.main-brand {
  margin: 15px 15px;
}

.log-status {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.profile {
  background-color: #d34f5c;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  color: #0c2045;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 12px;
  list-style: none;
  margin-right: 2%;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.profile:hover, .logout:hover{
  background-color: #0c2045;
  color: #d4d4d4;
}

.logout {
  background-color: #d34f5c;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  color: #0c2045;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 12px;
  list-style: none;
  margin: 0;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>
