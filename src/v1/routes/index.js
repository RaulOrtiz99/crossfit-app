const express = require('express'); 

const router= express.Router();


router.route("/").get((req,res)=>{
    res.send(`<h1> Hola desde ${req.baseUrl}`);
});


module.exports = router;