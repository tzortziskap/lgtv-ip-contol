const express = require('express');
const app = express();
const tv = require("./routes/tv");

app.use('/api/tv', tv);

const port = process.env.PORT || 3000;
const server = app.listen(port,() => console.log(`The vidly started on port ${port}`));

module.exports = server;
