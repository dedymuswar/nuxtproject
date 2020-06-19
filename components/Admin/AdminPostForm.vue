<template>
  <form class="w-full max-w-lg" @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author"> Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title"> Judul Post</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink"> Thumbnail Link</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.content"> Content</AppControlInput>
    <button
      type="submit"
      class="btn btn-success"
    >Simpan</button>
    <button
      type="cancel"
      @click="onCancel"
      class="btn btn-close"
    >Cancel</button>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnailLink: "",
            content: ""
          }
    }
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin")
    }
  }
}
</script>

<style>
</style>