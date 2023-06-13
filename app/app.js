const mysql = require('mysql');

// Create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'garage'
});

// Connect to MySQL
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
        return;
    }
    console.log('Connected to MySQL database');
});

// Execute a query
connection.query('SELECT * FROM brand', (error, results, fields) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    }
    console.log('Query results:', results);
});

// Close the connection
connection.end((error) => {
    if (error) {
        console.error('Error closing connection:', error);
        return;
    }
    console.log('Connection closed');
});