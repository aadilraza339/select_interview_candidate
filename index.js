var express = require('express');
var app = express();
app.use(express.json());

require('dotenv').config()

var usersRouter = require('./Router/user');


app.use('/', usersRouter);


// server running
app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started");
});

module.exports = app;    