<template>
  <Panel title="Tab">
    <textarea
      readonly
      v-model="song.tab"
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
