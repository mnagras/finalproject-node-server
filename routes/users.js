var express = require('express');
var router = express.Router();
const unirest = require("unirest");
//const userUrl = "http://localhost:8080/users";
const userUrl = "https://cs4550-hw1-mnagras.herokuapp.com/users"

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

/* GET user . */
router.get('/:userId', function(req, res, next) {
 const request = unirest("GET", userUrl + '/' + req.params.userId)
  .header("Content-Type", "application/json");

  console.log("before getting User");
    request.end(function (response) {
     // if (response.error) throw new Error(response.error);
       console.log("after getting User");
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
     //if (response.error) throw new Error(response.error);
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

router.put('/:userId', function(req, res, next) {
console.log("I am here for user update");
 const request = unirest("PUT", userUrl + '/' +req.params.userId)
 .header("Content-Type", "application/json")
 .send(req.body);

//console.log(req.body);

 console.log("before update");
   request.end(function (response) {
     //if (response.error) throw new Error(response.error);
      console.log("after update");
      res.send(response);
      console.log(response.body);
     /*res.json(response.body.associations_scored || {});*/
   });
});

router.delete('/:userId', function(req, res, next) {
console.log("I am here for user delete");
 const request = unirest("DELETE", userUrl + '/' + req.params.userId)
 .header("Content-Type", "application/json")
 .send(req.body);

//console.log(req.body);

 console.log("before user delete");
   request.end(function (response) {
   //  if (response.error) throw new Error(response.error);
      console.log("after user delete");
      res.send(response.body);
      console.log(response.body);
     /*res.json(response.body.associations_scored || {});*/
   });
});



module.exports = router;
