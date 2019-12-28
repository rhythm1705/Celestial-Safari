const express = require("express");
const router = express.Router();

// Load Collection model
const Collection = require("../../models/Collection");

// Create a collection
router.post("/", (req, res, next) => {
	Collection.create(req.body)
		.then(collection => {
			res.send(collection);
		})
		.catch(next);
});

// Add an item to a collection
router.patch("/add/:id", (req, res, next) => {
	Collection.findById(req.params.id)
		.then(collection => {
			const launchId = req.body.launch;
			if (launchId && !collection.launches.includes(launchId)) {
				collection.launches.push(launchId);
			}
			collection
				.save()
				.then(collection => res.json(collection))
				.catch(err => console.log(err));
		})
		.catch(next);
});

// Remove an item from a collection
router.patch("/remove/:id", (req, res, next) => {
	Collection.findById(req.params.id)
		.then(collection => {
			const launchId = req.body.launch;
			if (collection.launches.includes(launchId)) {
				collection.launches = collection.launches.filter(id => {
					return id != launchId;
				});
			}
			collection
				.save()
				.then(collection => res.json(collection))
				.catch(err => console.log(err));
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
router.get("/owner/:ownerId", (req, res, next) => {
	Collection.find({ owner: req.params.ownerId })
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
