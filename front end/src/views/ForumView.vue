<template>
  <div>
    <header-top></header-top>
    <h1>Partages ton contenu avec les autres !</h1>
    <div v-if="posts.length > 0" class="fil-posts">
      <div
        class="displaying-post"
        @click="selectPost(post.id)"
        v-bind:key="post.id"
        v-for="post in posts"
      >
        <img :src="post.picture" />
        <span class="message"> {{ post.message }}</span>
      </div>
    </div>
    <div v-else>
      <h2 class="announce">Sois le premier à poster quelque chose !</h2>
    </div>
    <button-add-post></button-add-post>
  </div>
</template>

<script>
import postService from '../services/post'
import headerTop from '../components/HeaderTop.vue'
import buttonAddPost from '../components/AddPost.vue'

export default {
  components: { headerTop, buttonAddPost },
  name: 'ForumView',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    postService
      .getAllPost()
      .then((posts) => {
        this.posts = posts.data
      })
      .catch((error) => console.log(error))
  },
  methods: {
    selectPost (id) {
      this.$router.push({ path: '/post/' + id })
    }
  }
}
</script>

<style scoped>

h1 {
  font-style: italic;
  font-weight: lighter;
  font-size: 3rem;
  color: white;
  text-align: center;
}

.announce {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  font-size: 4rem;
  color: white;
}

.fil-posts{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.displaying-post{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    backdrop-filter: brightness(0.3);
    margin-right: 2%;
    width: 35%;
}

img {
  width: 50%;
  margin: 0;
  object-fit: cover;
}

.message {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.8rem;
}

</style>
