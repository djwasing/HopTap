
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Riften#333',
    database: 'whiskey_db'
  });
};

// Setting up our connection information
var source = {
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Riften#333",
    database: "whiskey_db"
  }
};


// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
