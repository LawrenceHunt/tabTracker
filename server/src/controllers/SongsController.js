const { Song } = require('../models');

module.exports = {

  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      });
      res.send(songs);
    } catch (error) {
      res.status(500).send({
        error: 'An error has occurred trying to fuck you up with the songs.'
      });
    }
  },

  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      console.log('song: ', song)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the song'
      })
    }
  }
}
