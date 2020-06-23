<template>
  <div class="admin-new-post-page">
    <section class="new-post-form flex items-center justify-center">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get(
        "/posts/" +
          context.params.postId +
          ".json"
      )
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.postId }
        }
      })
      .catch(e => context.error())
  },
  methods: {
    onSubmitted(editedPost) {
        this.$store.dispatch('editPost', editedPost).then(() => {
            this.$router.push("/admin")
        })
    }
  },
  middleware: ['auth', 'check-auth']
}
</script>

<style>
</style>