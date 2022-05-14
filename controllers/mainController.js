let users = require("../data/users");


const controller = {
	index: function (req, res) {
		res.render("index", { users });
	},
};

module.exports = controller;
