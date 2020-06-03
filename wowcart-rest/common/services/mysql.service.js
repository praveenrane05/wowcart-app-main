const mysql = require('mysql2');


    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "wowcart-db"
    });   

exports.con = con;
