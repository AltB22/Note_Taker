const router = require('express').Router();
const {readFromFile, writeToFile} = require('../../helpers/fsUtils');

router.get('/notes', (req, res) => {
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);

  const note = writeToFile(req.body, res);
  res.json(note);
});


module.exports = router