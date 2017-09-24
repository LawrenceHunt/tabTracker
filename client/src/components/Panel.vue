<template>
  <v-layout column>
    <v-flex>
      <div class='white elevation-2 pb-3'>
        <v-toolbar flat dense class='cyan' dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="action" />
        </v-toolbar>


        <div class='pl-4 pr-4 pt-2'>
          <slot>
            Nothin here yet.
          </slot>
        </div>
      </div>
    </v-flex>
  </v-layout>


</template>

<script>

export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
