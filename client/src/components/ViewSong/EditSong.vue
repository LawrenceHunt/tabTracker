<template>
  <v-layout>
    <v-flex xs4>
      <Panel title="Add Song">
        <v-text-field
          label="Title"
          v-model='song.title'
          :rules="[required]"
        ></v-text-field>

          <br>

        <v-text-field
          label="Artist"
          v-model='song.artist'
          :rules="[required]"
        ></v-text-field>

          <br>

        <v-text-field
          label="Genre"
          v-model='song.genre'
          :rules="[required]"
        ></v-text-field>

          <br>

        <v-text-field
          label="Album"
          v-model='song.album'
          :rules="[required]"
        ></v-text-field>

          <br>

        <v-text-field
          label="AlbumImageUrl"
          v-model='song.albumImageUrl'
          :rules="[required]"
        ></v-text-field>

          <br>

        <v-text-field
          label="Youtube Id"
          v-model='song.youtubeId'
          :rules="[required]"
        ></v-text-field>

      </Panel>

    </v-flex>

    <v-flex xs8>
      <Panel title="Song Structure" class="ml-4">
        <v-text-field
          label="Lyrics"
          v-model='song.lyrics'
          multi-line
          :rules="[required]"
        ></v-text-field>

          <br>

        <v-text-field
          label="Tab"
          v-model='song.tab'
          multi-line
          :rules="[required]"
        ></v-text-field>


      </Panel>

      <span class='danger-alert' v-html='error' />

      <v-btn
        dark
        @click="save"
        class='cyan pr-3 pt-2 pl-3 pb-2 mt-4'
      >
        Save Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>


<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>
