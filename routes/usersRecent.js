var express = require('express');
var router = express.Router();
const unirest = require("unirest");
const userUrl = "http://localhost:8080/users/recent"

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





module.exports = router;
