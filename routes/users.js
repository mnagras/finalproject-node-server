var express = require('express');
var router = express.Router();
const unirest = require("unirest");
const userUrl = "http://localhost:8080/users"

/* GET users listing. */
router.get('/', function(req, res, next) {
 const request = unirest("GET", userUrl)
  .header("Content-Type", "application/json");

  console.log("before getting");
    request.end(function (response) {
      if (response.error) throw new Error(response.error);
       console.log("after getting");
       res.send(response);
       console.log(response.body);
});
});

router.post('/', function(req, res, next) {
console.log("I am here for user posting");
 const request = unirest("POST", userUrl)
 .header("Content-Type", "application/json")
 .send(req.body);

//console.log(req.body);

 console.log("before posting");
   request.end(function (response) {
     if (response.error) throw new Error(response.error);
      console.log("after posting");
      res.send(response);
      console.log(response.body);
     /*res.json(response.body.associations_scored || {});*/
   });
});

router.post('/login', function(req, res, next) {
console.log("I am here for login posting");
 const request = unirest("POST", userUrl + "/login")
 .header("Content-Type", "application/json")
 .send(req.body);

//console.log(req.body);

 console.log("before login");
   request.end(function (response) {
     //if (response.error) throw new Error(response.error);
      console.log("after login");
      res.send(response);
      console.log(response.body);
     /*res.json(response.body.associations_scored || {});*/
   });
});



module.exports = router;
