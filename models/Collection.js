const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
// Create Schema
const CollectionSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	owner: {
		type: ObjectId,
		ref: "User",
		required: true
	},
	upcomingLaunches: {
		type: [Number]
	},
	pastLaunches: {
		type: [Number]
	}
});
module.exports = Collection = mongoose.model("collections", CollectionSchema);
