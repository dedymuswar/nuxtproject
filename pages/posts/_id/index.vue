<template>
  <div>
    <div class="flex">
      <div class="w-full lg:w-2/3 h-screen mx-auto lg:2/3 items-center justify-center">
        <h1 class="text-5xl text-gray-800">{{loadedPost.title}}</h1>
        <div>
          <div class="py-4 flex">
            <img
              class="inline items-center justify-center h-12 w-12 border-2 border-solid shadow-md rounded-full"
              src="https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg"
              alt
              srcset
            />
            <span
              class="inline text-gray-600 py-3 mx-2 text-sm"
            >Last Update on {{ loadedPost.updatedDate | date }}</span>
            <span class="inline text-gray-600 py-3 text-sm">Written by {{loadedPost.author}}</span>
          </div>
        </div>
        <div>
          <img
            class="w-full h-auto object-cover object-center"
            :src="loadedPost.thumbnailLink"
            alt
          />
          <div class="leading-relaxed mt-3">
            <p class="text-base text-gray-700">{{loadedPost.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios.$get(`/posts/${context.params.id}.json`)
    .then(data => {
      return {
        loadedPost : data
      }
    })
    .catch(e => context.error(e))
  }
}
</script>

<style>
</style>