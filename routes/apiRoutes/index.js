const express = require('express');
const path = require('path');
const router = express.Router();
const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fsUtils');
const fs = require('fs');
// const notes = require('../../db/db.json');
const uuid = require('../../helpers/uuid');
// const test = require('../../db/db.json')


//GET route to retreive the notes data from db.json
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
  
  // POST route to save a new note to db.json
  router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    
    if(req.body) {
      const newNote = {
          title,
          text,
          id: uuid(),
        };

        readAndAppend(newNote, 'db/db.json');
        res.json(`New note has been added`)
    } else {
      res.error('Error adding note');
    }
  });

  router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    console.log(req.params.id);
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all tips except the one with the ID provided in the URL
        const result = json.filter((note) => note.id !== noteId);
  
        // Save that array to the filesystem
        writeToFile('./db/db.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${noteId} has been deleted`);
      });
  });
  
  module.exports = router;