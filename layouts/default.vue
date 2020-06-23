<template>
  <div>
    <Header></Header>
    <div class="py-4">
      <div class="container mx-auto">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"

export default {
  components: {
    Header
  }
}
</script>
<style>
h1{
  font-family: 'Merriweather Sans', sans-serif;
}

p{
  font-family: 'Open Sans', sans-serif;
}

</style>
