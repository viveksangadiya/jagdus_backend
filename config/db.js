const mysql = require('mysql');

// Create MySQL Connection Pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jagdus_backend',
});

module.exports = pool;