<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <Panel title="Songs">
        <v-btn
          slot="action"
          :to="({name: 'songs-create' })"
          class='cyan accent-2'
          light
          medium
          absolute
          right
          middle
          fab
        >
          <v-icon>add</v-icon>
        </v-btn>

        <div
          v-for="song in songs"
          class="song"
          :key="song.id"
        >
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                Title: {{song.title}}
              </div>
              <div class="song-title">
                Artist: {{song.artist}}
              </div>
              <div class="song-title">
                Genre: {{song.genre}}
              </div>

              <v-btn
                dark
                class="cyan"
                @click="view"
                :to="{ name: 'song', params: {songId: song.id}}"
              >
                View
              </v-btn>
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
          </v-layout>

        </div>


      </Panel>
    </v-flex>
  </v-layout>

</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    // request songs from backend
    this.songs = (await SongService.index()).data
  },
  methods: {

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
</style>
