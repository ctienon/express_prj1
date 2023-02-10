var express= require('express');
var router_matrix=   express.Router();

router_matrix.get("/",(req,res)=>{
    res.send("GET from matrix router...");
});

module.exports = router_matrix;
