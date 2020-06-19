<template>
  <div>
    <Header></Header>
    <main>
      <div class="container h-screen mx-auto bg-gray-200 flex items-center justify-center">
        <div class="w-1/2 bg-white p-10 leading-normal shadow-lg rounded">
          <nuxt></nuxt>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import Header from "~/components/Header.vue"

export default {
  components: {
    Header
  }
}
</script>