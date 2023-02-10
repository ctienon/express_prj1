var express = require ('express');
var app= express ();
var port = 3000
var things= require("./things.js");
var matrix= require("./matrix.js");
var geoloc= require ("./geoloc.js");

app.use('/things', things);
app.use('/matrix', matrix);
app.use ("/geoloc", geoloc);

app.listen(port);