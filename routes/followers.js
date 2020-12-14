var express = require('express');
var router = express.Router();
const unirest = require("unirest");
//const followersUrl = "http://localhost:8080/followers";
//const followingUrl = "http://localhost:8080/following";
const followersUrl = "https://cs4550-hw1-mnagras.herokuapp.com/followers";
const followingUrl = "https://cs4550-hw1-mnagras.herokuapp.com/following";


/* GET followers listing. */
router.get('/:userId', function(req, res, next) {
 const request = unirest("GET", followersUrl + "/" + req.params.userId)
  .header("Content-Type", "application/json");

  console.log("before getting");
    request.end(function (response) {
//      if (response.error) throw new Error(response.error);
       console.log("after getting");
       res.send(response.body);
       console.log(response.body);
    });
});

/* GET following listing. */
router.get('/following/:userId', function(req, res, next) {
 const request = unirest("GET", followingUrl  + "/" + req.params.userId)
  .header("Content-Type", "application/json");

  console.log("before following getting");
    request.end(function (response) {
//      if (response.error) throw new Error(response.error);
       console.log("after following getting");
       res.send(response.body);
       console.log(response.body);
    });
});


router.post('/', function(req, res, next) {
console.log("I am here for follower posting");
 const request = unirest("POST", followersUrl)
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

router.delete('/', function(req, res, next) {
console.log("I am here for follower delete");
 const request = unirest("DELETE", followersUrl)
 .header("Content-Type", "application/json")
 .send(req.body);

//console.log(req.body);

 console.log("before follower deletr");
   request.end(function (response) {
   //  if (response.error) throw new Error(response.error);
      console.log("after follower delete");
      res.send(response.body);
      console.log(response.body);
     /*res.json(response.body.associations_scored || {});*/
   });
});

module.exports = router;