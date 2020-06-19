<template>
  <div>
    <Header></Header>
    <main>
    <div class="py-4">
      <div class="container mx-auto">
        <nuxt />
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