<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class='white elevation-2 pb-3'>
        <v-toolbar flat dense class='cyan' dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class='pl-4 pr-4 pt-2'>
          <form
            name="tab-tracker-form"
            autocomplete="off"
          >
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
              autocomplete="new-password"
            ></v-text-field>
          </form>
        </br>
          <div class='error' v-html='error' />
        </br>
          <v-btn
            dark
            @click="register"
            class='cyan pr-2 pt-1 pl-2 pb-1'
          >
            Submit
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>


</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'register',
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
    async register () {
      try {
        await AuthenticationService.register({
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
