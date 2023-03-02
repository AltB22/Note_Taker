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