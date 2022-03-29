<template>
  <router-view>
  </router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Economica&display=swap');
html{
  height: 100%;
}
body {
  font-family: 'Economica', sans-serif;
  background-image: url('@/assets/groupomaniabgrnd.png');
  background-size: contain, cover;
  background-repeat: no-repeat;
}
</style>
