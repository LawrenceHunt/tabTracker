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
        @click="create"
        class='cyan pr-3 pt-2 pl-3 pb-2 mt-4'
      >
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>


<script>
  import Panel from '@/components/Panel'
  import SongsService from '@/services/SongsService'

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
      async create () {
        this.error = null
        const areAllFieldsFilledIn = Object
          .keys(this.song)
          .every(key => !!this.song[key])
        if (!areAllFieldsFilledIn) {
          this.error = 'Please fill in all the required fields.'
          return
        }
        try {
          await SongsService.post(this.song)
          this.$router.push({
            name: 'songs'
          })
        } catch (err) {
          console.log(err)
        }
      }
    },
    components: {
      Panel
    }
  }

</script>
