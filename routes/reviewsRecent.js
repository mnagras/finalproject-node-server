var express = require('express');
var router = express.Router();
const unirest = require("unirest");
//const reviewUrl = "http://localhost:8080/reviews/recent";
const reviewUrl = "https://cs4550-hw1-mnagras.herokuapp.com/reviews/recent";

/* GET reviews listing. */
router.get('/', function(req, res, next) {
 const request = unirest("GET", reviewUrl)
  .header("Content-Type", "application/json");

  console.log("before getting");
    request.end(function (response) {
//      if (response.error) throw new Error(response.error);
       console.log("after getting");
       res.send(response.body);
       console.log(response.body);
    });
});



module.exports = router;
