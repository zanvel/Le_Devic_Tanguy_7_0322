<template>
  <div>
    <header>
      <div class="arrow-left" @click="backToForum()">⇦</div>
    </header>
    <div v-if="post" class="post">
      <img :src="post.picture" />
      <span class="message"> {{ post.message }}</span>
      <div v-if="userId == post.userId || user.admin == true" class="button-display">
        <button @click="togglePut()" class="put">Modifier</button>
        <button @click="deletePost()" class="delete">Supprimer</button>
      </div>
      <put-post-template
        v-bind:reveal="reveal"
        v-bind:togglePut="togglePut"
        :id="id"
      ></put-post-template>
    </div>
    <comments :id="id"></comments>
  </div>
</template>

<script>
import userService from '../services/user'
import postService from '../services/post'
import putPostTemplate from '../components/PostTemplate.vue'
import comments from '../components/CommentsCompo.vue'

export default {
  components: { putPostTemplate, comments },
  name: 'PostDetail',
  data () {
    return {
      post: {},
      reveal: false,
      userId: '',
      user: ''
    }
  },
  mounted () {
    this.userId = localStorage.getItem('userId')
    postService
      .getPostById(this.id)
      .then((post) => {
        this.post = post.data
      })
      .catch((error) => console.log(error))
    userService.getUser().then((user) => {
      console.log('message get profile:', user.data)
      this.user = user.data
    })
  },
  methods: {
    backToForum () {
      this.$router.push({ path: '/forum' })
    },
    togglePut () {
      this.reveal = !this.reveal
    },
    deletePost () {
      if (window.confirm('Voulez-vous vraiment supprimer votre post ?')) {
        postService.deletePost(this.id).then((res) => {
          this.$router.push({ path: '/forum' })
        })
      }
    }
  },
  props: ['id']
}
</script>

<style scoped>

.button-display {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
}

.put {
  background-color: #0c2045;
  color: #d4d4d4;
  margin-right: 50px;
}

.delete {
  background-color: #d34f5c;
  color: #d4d4d4;
  margin-left: 50px;
}

.arrow-left {
  position: absolute;
  top: -50px;
  left: 20px;
  color: rgb(255, 255, 255);
  font-size: 8rem;
  cursor: pointer;
}

.post {
  display: flex;
  flex-direction: column;
  margin: 10% auto 2%;
  width: 70%;
  height: auto;
  border-radius: 25px;
  background-color: rgb(215, 221, 219);
  border: 2px solid rgb(156, 255, 64);
}

img {
  width: 90%;
  height: 750px;
  border-radius: 25px;
  object-fit: cover;
  margin: 10% auto;
}

.message {
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  padding: 10px 0;
  margin: 20px 0;
}
</style>
