const express = require('express');
const app = express();//starting an express session
const PORT = process.env.PORT || 3001;//defines PORT number (to listen on)
const htmlRoutes = require('./routes/htmlRoutes')//index.js is implied / is the default that is going to be read by JS
const apiRoutes = require('./routes/apiRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));//middleware to serve static files.

app.use('/api', apiRoutes)

app.use('/', htmlRoutes)






app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);