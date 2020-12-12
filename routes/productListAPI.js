var express = require('express');
var router = express.Router();
const unirest = require("unirest");
/* request.query({ "entry": req.params.word });*/
/* GET users listing. */
router.get('/:searchKeyword', function(req, res, next) {
  /* res.send('API is working properly'); */
  const request = unirest("GET",
  "https://manamionlinestore.myshopify.com/admin/api/2020-10/products.json");

  request.headers({
    "Authorization": 'Basic ' +
    Buffer.from("865f308f8c39f7a629e18ed20538c4e9" + ':' +
    "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").toString('base64'),
  });

  request.end(function (response) {
    //if (response.error) throw new Error(response.error);
     console.log(response);
     res.send(response);
    /*res.json(response.body.associations_scored || {});*/
  });

});

module.exports = router;