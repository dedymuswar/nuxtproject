<template>
  <div class="admin-page">
      <section class="new-post mb-2">
          <button @click="$router.push('/admin/new-post')" class="btn btn-primary">Create Post</button>
          <button @click="onLogout" class="btn btn-success">Logout</button>
      </section>
      <section class="existing-posts">
          <p class="text-3xl mb-2">Existing Posts</p>
          <PostList isAdmin :posts="loadedPosts"/>
      </section>
  </div>
</template>

<script>
export default {
    layout: 'admin',
    computed: {
        loadedPosts(){
            return this.$store.getters.loadedPosts
        }
    },
    methods:{
        onLogout(){
            this.$store.dispatch('logout')
            this.$router.push('/admin/auth')
        }
    },
    middleware: ['auth', 'check-auth']
}
</script>

<style>

</style>