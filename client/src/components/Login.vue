<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class='white elevation-2 pb-3'>
        <v-toolbar flat dense class='cyan' dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class='pl-4 pr-4 pt-2'>
          <v-text-field
            label="email"
            v-model='email'
            class="input-group--focused"
            ></v-text-field>
        </br>
        <v-text-field
            type='password'
            label="password"
            v-model='password'
            class="input-group--focused"
          ></v-text-field>
        </br>
          <div class='error' v-html='error' />
        </br>
          <v-btn
            dark
            @click="login"
            class='cyan pr-2 pt-1 pl-2 pb-1'
          >
            Log In
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>


</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

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
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
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
