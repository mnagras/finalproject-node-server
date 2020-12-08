var express = require('express');
var router = express.Router();
const unirest = require("unirest");
const userUrl = "http://localhost:8080/users"

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users', function(req, res, next) {
 const request = unirest("POST", userUrl);

 request.body(req.params.user).asJson();

   request.end(function (response) {
     if (response.error) throw new Error(response.error);
      console.log(response);
      res.send(response);
     /*res.json(response.body.associations_scored || {});*/
   });

});

module.exports = router;
