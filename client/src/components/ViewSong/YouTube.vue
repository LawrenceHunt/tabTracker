<template>
  <Panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="580"
      :player-height="290"
    ></youtube>
  </Panel>
</template>

<script>
  import Panel from '@/components/Panel'
  import VueYouTubeImbed from 'vue-youtube-embed'
  export default {
    props: [
      'youtubeId'
    ],
    components: {
      Panel,
      VueYouTubeImbed
    }
  }

</script>

<style scoped>
</style>
