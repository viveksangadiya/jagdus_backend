const User = require('../models/usersModel');

const UserController = {
    getAllUsers: function(req, res) {
      User.getAllUsers(function(users) {
        res.json(users);
      });
    },
}

module.exports = UserController;
