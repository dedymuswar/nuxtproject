<template>
  <div>
    <div>
      <section
        class="intro h-56 w-auto bg-local bg-cover opacity-75 bg-bottom mb-5 rounded-lg p-10 antialiased"
        :style="{backgroundImage: 'url(' + require('@/assets/images/bg.jpg')+')' }"
      >
        <p class="text-white text-5xl font-extrabold">Get the latest tech news!</p>
      </section>

      <PostList :posts="loadedPosts" />
    </div>
  </div>
</template>

<script>
export default {
computed:{
  loadedPosts(){
    return this.$store.getters.loadedPosts
  }
}

}
</script>

<style>
</style>



