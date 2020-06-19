<template>
  <div class="admin-new-post-page">
    <section class="new-post-form flex items-center justify-center">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from "axios"
export default {
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/admin")
      })
    }
  }
}
</script>

<style>
</style>