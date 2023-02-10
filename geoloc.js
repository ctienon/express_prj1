var express = require('express');
const router = require('./things');
var router_geoloc= express.Router();

router_geoloc.get("/",(req,res)=>{
    res.send("GET from geoloc router...");
});

module.exports= router_geoloc;
