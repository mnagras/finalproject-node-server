var express = require('express');
var router = express.Router();
const unirest = require("unirest");
const reviewUrl = "http://localhost:8080/reviews";

/* GET reviews listing. */
router.get('/:productId', function(req, res, next) {
 const request = unirest("GET", reviewUrl + "/" + req.params.productId)
  .header("Content-Type", "application/json");

  console.log("before getting");
    request.end(function (response) {
//      if (response.error) throw new Error(response.error);
       console.log("after getting");
       res.send(response.body);
       console.log(response.body);
    });
});

/* GET reviews listing. */
router.get('/user/:userId', function(req, res, next) {
 const request = unirest("GET", reviewUrl + "/user/" + req.params.userId)
  .header("Content-Type", "application/json");

  console.log("before userReview getting");
    request.end(function (response) {
//      if (response.error) throw new Error(response.error);
       console.log("after userReview getting");
       res.send(response.body);
       console.log(response.body);
    });
});

router.post('/', function(req, res, next) {
console.log("I am here for review posting");
 const request = unirest("POST", reviewUrl)
 .header("Content-Type", "application/json")
 .send(req.body);

//console.log(req.body);

 console.log("before posting");
   request.end(function (response) {
   //  if (response.error) throw new Error(response.error);
      console.log("after posting");
      res.send(response.body);
      console.log(response.body);
     /*res.json(response.body.associations_scored || {});*/
   });
});

module.exports = router;
