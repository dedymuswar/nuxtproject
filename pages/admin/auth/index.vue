<template>
  <div class="admin-auth-page flex align-items justify-center">
    <div class="auth-container">
      <form class="w-full max-w-lg shadow-lg py-8 px-10" @submit.prevent="onSubmit">
        <p
          class="text-2xl mb-6 flex justify-center text-gray-600 font-extrabold pb-3 border-b-2 border-gray-200"
        >Login or Register</p>
        <AppControlInput type="email" v-model="email">Email Address</AppControlInput>
        <AppControlInput type="password" v-model="password">Password</AppControlInput>
        <button class="btn btn-primary">{{isLogin ? 'Login' : 'Sign Up'}}</button>
        <button
          type="button"
          class="btn btn-close"
          @click="isLogin = !isLogin"
        >Switch to {{ isLogin ? 'Signup' : 'Login'}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from "~/Components/UI/AppControlInput"
export default {
  name: "adminAuthPage",
  layout: "admin",
  components: {
    AppControlInput
  },
  data() {
    return {
      email: "",
      password: "",
      isLogin: true
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style>
</style>