<template>
  <section class="featured">
    <div class="flex flex-wrap -mx-4 mb-4 md:mb-0">
      <PostPreview
        v-for="post in posts"
        v-bind:key="post.id"
        :id="post.id"
        :is-admin="isAdmin"
        :thumbnail="post.thumbnailLink"
        :title="post.title"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>