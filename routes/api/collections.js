const express = require("express");
const router = express.Router();

// Load Collection model
const Collection = require("../../models/Collection");

// Post a collection
router.post("/", (req, res, next) => {
	Collection.create(req.body)
		.then(collection => {
			res.send(collection);
		})
		.catch(next);
});

// Get all collections
router.get("/", (req, res, next) => {
	Collection.find({})
		.then(collections => {
			res.send(collections);
		})
		.catch(next);
});

// Get all collections of a user
router.get("/", (req, res, next) => {
	Collection.find({ owner: req.body.owner })
		.then(collections => {
			res.send(collections);
		})
		.catch(next);
});

// Get a collection by id
router.get("/:id", (req, res, next) => {
	Collection.findById(req.params.id)
		.then(collection => {
			res.send(collection);
		})
		.catch(next);
});

module.exports = router;
