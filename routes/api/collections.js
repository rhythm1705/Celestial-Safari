const express = require("express");
const router = express.Router();


// Load Collection model
const Collection = require("../../models/Collection");

router.post('/', (res, req, next) => {
    Collection.create(req.body).then((collection) => {
        res.send(collection);
    }).catch(next);
});

module.exports = router;