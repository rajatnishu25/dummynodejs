const express = require('express');
var app = express();
const mongoose = require('mongoose');


require('dotenv').config();
// {path: path/filename}

// process.evn.Port

let port = process.env.PORT;
let dburl = process.env.url;


mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
  console.log("Connect Datebase");
}, function (err) {
  console.log(err)
})




app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
})






