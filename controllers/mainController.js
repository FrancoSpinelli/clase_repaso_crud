// REQUERIMOS LA BASE DE DATOS
let users = require("../data/users");


// CREAMOS LOS METODOS DEL CONTROLADOR
const controller = {
	//1- RENDERIZAMOS EL INDEX CON LA VARIABLE USUARIOS
	index: function (req, res) {
		res.render("index", { users });
	},
};

module.exports = controller;
