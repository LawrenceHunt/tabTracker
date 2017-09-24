<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-meta-data :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <tabs :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
  import SongsService from '@/services/SongsService'
  import Panel from '@/components/Panel'
  import SongMetaData from './SongMetaData'
  import YouTube from './YouTube'
  import Lyrics from './Lyrics'
  import Tabs from './Tabs'

  export default {
    data () {
      return {
        song: null
      }
    },
    async mounted () {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    },
    components: {
      Panel,
      SongMetaData,
      YouTube,
      Lyrics,
      Tabs
    }
  }

</script>

<style scoped>

  textarea {
    width: 80%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
