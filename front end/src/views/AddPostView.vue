<template>
  <div class="addPost-view">
    <div class="arrow-left" @click="backToForum()">⇦</div>
    <div class="create-post">
      <h1>Envoies ton post ici 😁 !</h1>
      <div class="display-post">
        <input type="file" class="file" v-on:change="updatePicture" />
        <textarea
          v-model="message"
          class="area"
          name="post"
          id="post"
          cols="20"
          rows="10"
          maxlength="400"
          minlength="1"
        ></textarea>
      </div>
      <button @click="sendPost()">Crée un post</button>
    </div>
  </div>
</template>

<script>
import addPostService from '../services/post'

export default {
  name: 'addPost',
  data () {
    return {
      message: '',
      picture: ''
    }
  },
  methods: {
    sendPost () {
      const data = new FormData()
      data.append('message', this.message)
      data.append('file', this.picture)
      addPostService
        .addPost(data)
        .then((post) => {
          alert('Post envoyé, bravo ! 😃')
          this.$router.push({ path: '/forum' })
        })
        .catch((error) => console.log(error))
    },
    updatePicture (event) {
      this.picture = event.target.files[0]
    },
    backToForum () {
      this.$router.push({ path: '/forum' })
    }
  }
}
</script>

<style scoped>
body{
  background-image: none;
}

.addPost-view {
  width: 100%;
  height: 100%;
}

.arrow-left {
  position: absolute;
  top: -50px;
  left: 20px;
  color: rgb(255, 255, 255);
  font-size: 8rem;
  cursor: pointer;
}

.create-post h1 {
  text-align: center;
  color: rgb(0, 0, 0);
}

.create-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 500px;
  background-color: rgb(215, 221, 219);
  margin: 200px auto 0;
  border-radius: 15px;
  border: 2px solid rgb(156, 255, 64);
  box-shadow: 5px 2px 2px rgba(66, 65, 65, 0.424);
}

.display-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 10px;
}

.area {
  resize: none;
  font-size: 1.5rem;
  font-weight: 600;
  height: 200px;
}

button {
  align-self: center;
  outline: none;
  width: 30%;
  padding: 10px;
  margin: 20px 20px;
  font-size: 1.5rem;
  font-weight: 600;
  border: 2px outset rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  background-color: rgb(236, 255, 66);
}
</style>
