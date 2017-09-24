<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">

        <form
          name="tab-tracker-form"
          autocomplete="off"
        >
          <v-text-field
            label="email"
            v-model='email'
            class="input-group--focused"
            ></v-text-field>

        <br>

        <v-text-field
            type='password'
            label="password"
            v-model='password'
            class="input-group--focused"
            autocomplete="new-password"
          ></v-text-field>
        </form>

        <br>

          <div class='danger-alert' v-html='error' />

        <br>

          <v-btn
            dark
            @click="login"
            class='cyan pr-2 pt-1 pl-2 pb-1'
          >
            Log In
          </v-btn>

      </panel>
    </v-flex>
  </v-layout>


</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  name: 'login',
  data () {
    return {
      email: 'abc',
      password: '123',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('email has changed: ', value)
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello@world.com'
      this.password = 'helLooooo123'
    }, 2000)
  }
}
</script>

<style scoped>

</style>
