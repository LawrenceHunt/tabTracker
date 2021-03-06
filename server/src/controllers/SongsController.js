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
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fuck you up with the songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      console.log('song: ', song)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the song.'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to save the song.'
      })
    }
  }


}
