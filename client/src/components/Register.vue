<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="Register">

        <form
          name="tab-tracker-form"
          autocomplete="off"
        >

          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>

          <br>

          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>

        </form>

        <br>

        <div class="danger-alert" v-html="error" />

        <br>

        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>

      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

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
        const response = await AuthenticationService.register({
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
