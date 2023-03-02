const express = require('express');
const path = require('path');
const router = express.Router();
const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fsUtils');
const fs = require('fs');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
  
      const notes = JSON.parse(data);
      res.json(notes);
    });
  });
  
  // POST Route for submitting a new note
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