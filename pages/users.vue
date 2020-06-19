<template>
    <div>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap mb-6">
          <label for="id" class="text-sm mb-2 block text-gray-600 uppercase">Input ID</label>
          <input
            type="text"
            name="id"
            v-model="userId"
            class="border p-2 rounded w-full focus:border-blue-400 focus:outline-none"
          />
        </div>
        <button
          type="button"
          @click="onLoadUser"
          class="btn btn-success"
        >Load User</button>
      </form>
      <nuxt-child></nuxt-child>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ""
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`)
    }
  },
  layout: 'users'
}
</script>