<template>
  <Panel title="Lyrics">
    <textarea
      readonly
      v-model="song.lyrics"
    >
    </textarea>
  </Panel>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    props: [
      'song'
    ],
    components: {
      Panel
    }
  }

</script>

<style scoped>
</style>
