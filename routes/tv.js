const express = require('express');
const router = express.Router();
const TvApi = require("node-lgtv-api");



router.get('/', function(req, res, next) {
  const tvApi = new TvApi("192.168.10.72", "9761", "879540");
  tvApi.authenticate().then(() => tvApi.processCommand(TvApi.TV_CMD_MUTE_TOGGLE, [])
      .then(console.log, console.error), console.error);
  return res.status(404).send('The course with the given ID was not found');}
);

module.exports = router;
