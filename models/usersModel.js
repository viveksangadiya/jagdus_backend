const sql = require('../config/db');


const User = {
    getAllUsers: function(callback) {
        sql.query('SELECT * FROM users', function(err, rows) {
        if (err) throw err;
        callback(rows);
      });
    },
}

module.exports = User;