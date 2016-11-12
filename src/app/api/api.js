// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
		User = require('../models/user')

		// Example API route
		app.get('/models', function(req, res) {

			// Checks the model collection and returns all of them`
			User.find(function(err, models) {

				// returns all people in JSON format
				res.send(models);
			});
		});

		// Example POST route
		app.post('/models', function (req, res) {
			User.create({
				name : req.body.name,
        picture: req.body.picture
			}, function(err, model) {
				if(err) {
					res.send(err);
				}

				User.find(function(err, models) {
					res.send(models);
				});
			});
		});

		// Example DELETE route
		app.delete('/models/:model_id', function (req, res) {
			User.remove({
				_id: req.params.model_id
			}, function(err, model) {
				if(err) {
					res.send(err);
				}

				User.find(function(err, models) {
					res.send(models);
				});
			});
		});

}

// Error handler for the api
function handleError(res, reason, message, code) {
console.log("API Error: " + reason);
res.status(code || 500).json({"Error": message});
}
