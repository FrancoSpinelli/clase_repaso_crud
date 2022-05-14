let users = require("../data/users");

const controller = {
	edit: (req, res) => {
        const idParam = req.params.id;
        let userSelected = null
        users.forEach(user => {
            if (user.id == idParam) {
                return userSelected = user
            }
        })
		res.render("edit", {user: userSelected});
	},
	register: (req, res) => {
		res.render("register");
	},
	detail: (req, res) => {
        const idParam = req.params.id;
        let userSelected = null
        users.forEach(user => {
            if (user.id == idParam) {
                return userSelected = user
            }
        })

		res.render("detail", {user: userSelected});
	},
	processRegister: (req, res) => {
		const data = req.body;
		let newUser = {
			id: users.length + 1,
			...data,
		};
		users.push(newUser);
        res.redirect('/')
		// res.render("index", { users });
	},
    processEdit: (req, res) => {
        const idParam = req.params.id;
        const data = req.body;
		let userEdited = {
            id: idParam,
			...data,
		};
		users[idParam - 1] = userEdited;
        res.redirect('/')
    },

    delete: (req, res) => {
        const idParam = req.params.id;
        let usersArray = users.filter(user => user.id != idParam);
        // res.redirect("/")
        res.render('index', {users: usersArray })
    }
};

module.exports = controller;
