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

router.get("/shop-info", (req, res) => {
  fetch("https://manamionlinestore.myshopify.com/admin/api/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": "e6cfef00d4ee0b7c835c2d465a1aa67c"
    },
    body: JSON.stringify({
      query: `query findProducts($query: String!, $num: Int!) {
         products(first: $num, query: $query) {
           edges {
             cursor
             node {
               id
               title
             }
           }
         }
       }`,
      variables: { query: "Cup", num: 50 }
    })
  })
    .then(result => {
      return result.json();
    })
    .then(data => {
      console.log("data returned:\n", data);
      res.send(data);
    });
});

module.exports = router;