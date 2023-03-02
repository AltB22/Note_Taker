// const router = require('express').Router();
// const {readFromFile, writeToFile, readAndAppend} = require('../../helpers/fsUtils')
// // const arrayOfNotes = require('.db/db.json');

// router.get('/notes', (req, res) => {
// readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// })

// router.post('/notes', (req, res) => {
//     console.info(`${req.method} request received to add a note`);
//     console.log(req.body);

//   const newNote = req.body; 
//   arrayOfNotes.push(newNote);
//   readAndAppend();
//   return console.log(`New note: ${newNote.title} has been added`)

// });

// module.exports = router

const express = require('express');
const router = express.Router();
const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fsUtils');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
  readFromFile('../../db/db.json')
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => console.error(err));
});

const filePath = path.join(__dirname, '../db/db.json');

router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  const newNote = { title, text, id: notes.length + 1 };
  notes.push(newNote);
  writeToFile(filePath, notes)
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
