<template>
  <div>
    <div class="mb-5">
      <div class="text-4xl text-gray-700">Our Latest Post</div>
      <p
        class="text-gray-600"
      >Pilih seri yang Anda butuhkan saat ini. Karena seri - seri berikut adalah seri terbaru yang bisa Anda tonton.</p>
    </div>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  },
  middleware: 'auth'
}
</script>

<style>
</style>