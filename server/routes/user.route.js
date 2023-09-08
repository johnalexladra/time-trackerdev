const express = require("express");

const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} = require("../controllers/user.controller");

const router = express.Router();

// read all users
router.get('/', getUsers);

// create all users
router.post('/', createUser);

// read a specific user by id
router.get('/:id', getUser);

// delete a specific user by id
router.delete('/:id', deleteUser);

// update a specific user by id
router.patch('/:id', updateUser);

module.exports = router;