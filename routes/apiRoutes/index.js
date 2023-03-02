const express = require('express');
const path = require('path');
const router = express.Router();
const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fsUtils');
const fs = require('fs');
// const notes = require('../../db/db.json');
const uuid = require('../../helpers/uuid');
// const test = require('../../db/db.json')

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
  
  module.exports = router;