const router = require("express").Router();
const noteRouter = require('./noteRoutes');

router.use('/', noteRouter);

module.exports = router;
