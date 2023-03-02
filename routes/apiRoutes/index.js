const express = require('express');
const router = express.Router();
const { readFromFile, writeToFile } = require('../../helpers/fsUtils');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
  readFromFile('../../db/db.json')
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => console.error(err));
});

router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  const newNote = { title, text, id: notes.length + 1 };
  notes.push(newNote);
  writeToFile('../../db/db.json', notes)
    .then(() =>
      res.json({
        success: true,
        message: 'Note added successfully',
        data: newNote,
      })
    )
    .catch((err) => console.error(err));
});

module.exports = router;
