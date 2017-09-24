<template>
  <Panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
    <v-btn
      dark
      class='cyan pr-3 pt-2 pl-3 pb-2 mt-4'
      @click="navigateTo({
        name: 'song-edit',
        params: {
          songId: song.id
        }
        })"
    >
      Edit
    </v-btn>
  </Panel>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    props: [
      'song'
    ],
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }
    },
    components: {
      Panel
    }
  }

</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  max-width: 70%;
  margin: 0 auto;
}
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
