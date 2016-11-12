var mongoose = require('mongoose'),
Schema = mongoose.Schema;

// Validation helper methods should return booleans
// and should be defined before the schema for readability


// User Schema
var UserSchema = new Schema ({
	name : String, // first and last name
	picture : String // the url link for the fb profile picture

});

module.exports = mongoose.model('User', UserSchema);
