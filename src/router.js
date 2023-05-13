const express = require('express')
const NoteController = require('./controllers/notes.contoller')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Welcome to the our random ideas app')
})

//get all ideas
router.get('/ideas', NoteController.getAllNotes)

//get a single idea
router.get('/ideas/:id', NoteController.getUniqueNote)

//post an idea
router.post('/ideas', NoteController.addNote)

//update an idea
router.put('/ideas/:id', NoteController.updateNote)

//delete an idea
router.delete('/ideas/:id', NoteController.deleteNote)

module.exports = router
