<template>
  <div class="login-page">
    <form  @submit.prevent="userLogin">
      <input type="text" name="email" id="email" v-model="login.email">
      <input type="password" name="password" id="password" v-model="login.password">
      <button type="submit">LOGIN</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: '',
    mounted(){
      this.$store.dispatch('authenticate')
    },
    data() {
      return {
        login: {
          email: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      userLogin(){
        this.$store.dispatch('login', this.login)
      }
    }
  }

</script>

<style>


</style>
