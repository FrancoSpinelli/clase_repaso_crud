const express = require('express');
const router = express.Router()

const usersController = require("../controllers/usersController")


// CREATE
router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);

// UPDATE
router.get("/edit/:id", usersController.edit);
router.put("/edit/:id", usersController.processEdit)

// DETAIL
router.get("/detail/:id", usersController.detail);

//DELETE 
router.delete("/delete/:id", usersController.delete)


module.exports = router;