<template>
  <nuxt-link :to="postLink" class="w-full lg:w-1/3 mb-5 px-4">
    <img
      class="rounded-lg h-56 w-full object-cover object-center"
      :src="thumbnail"
      alt
    />
    <div class="px-5 -mt-5">
      <div class="bg-white p-5 leading-relaxed text-gray-700 rounded-lg relative shadow-lg">
        <div class="mb-5">
          <div>{{title}}</div>
        </div>
        <div>
          <a href="#" class="text-xs uppercase bg-gray-300 px-3 inline-block rounded-full">#Woman</a>
          <a
            href="#"
            class="text-xs uppercase bg-gray-300 px-3 inline-block rounded-full"
          >#Traveling</a>
          <a href="#" class="text-xs uppercase bg-gray-300 px-3 inline-block rounded-full">#Kitchen</a>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
    name: 'PostPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        isAdmin: {
          type: Boolean,
          required: true
        },
        title: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    },
    computed: {
      postLink() {
        return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
      }
    }
}
</script>

<style>

</style>