const express = require('express')
const NoteController = require('./controllers/notes.contoller')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Welcome to the our note app')
})

//get all ideas
router.get('/notes', NoteController.getAllNotes)

//get a single idea
router.get('/notes/:id', NoteController.getUniqueNote)

//post an idea
router.post('/notes', NoteController.addNote)

//update an idea
router.put('/notes/:id', NoteController.updateNote)

//delete an idea
router.delete('/notes/:id', NoteController.deleteNote)

module.exports = router
