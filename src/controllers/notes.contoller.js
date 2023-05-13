const Notes = require('../models/Notes')

const NoteController = {
  async getAllNotes(_, res) {
    try {
      const notes = await Notes.find()
      res.json({ success: true, data: notes })
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' })
    }
  },

  // get a unique note
  async getUniqueNote(req, res) {
    try {
      const idea = await Notes.findById(req.params.id)
      return res.json({ success: true, data: idea })
    } catch (error) {
      res.status(500).json('Something went wrong')
    }
  },
  //post a note
  async addNote(req, res) {
    const note = new Notes({
      text: req.body.text,
      tag: req.body.tag,
      username: req.body.username,
    })
    try {
      const newNote = await note.save()
      res.status(201).json({ success: true, data: newNote })
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' })
    }
  },

  // update a note

  async updateNote(req, res) {
    try {
      const updatedNote = await Notes.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            tag: req.body.tag,
          },
        },
        { new: true }
      )
      res.json({ success: true, data: updatedNote })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, error: 'Something went wrong' })
    }
  },

  // delete a note
  async deleteNote(req, res) {
    try {
      await Notes.findByIdAndDelete(req.params.id)
      res.status(200).send('idea deleted successfully')
    } catch (error) {
      res.status(500).json({ error: 'Somthing went wrong' })
    }
  },
}
module.exports = NoteController
