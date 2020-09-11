'use strict';
var mysql = require('mysql');

// function connect() {
//     return mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'jshhaby0921++',
//         database: 'Location',
//         port: 3306,
//         ssl: false
//     });
// }

function connect() {
    return mysql.createConnection({
        host: 'us-cdbr-east-02.cleardb.com',
        user: 'b7f38136889ea3',
        password: '9bc0ca2f',
        database: 'heroku_c7d8ff5943024e2',
        port: 3306,
        ssl: false
    });
}

module.exports.selectAll = function () {
    return new Promise(function (resolve, reject) {
        var client = connect();

        var records = [];

        client.query('SELECT * FROM locations', function (error, rows, fields) {
            if (error) {
                return reject(error);
            } else {
                for (var i = 0; i < rows.length; i++) {
                    var row = {
                        'id': rows[i].id,
                        'name': rows[i].name,
                        'latitude': rows[i].latitude,
                        'longitude': rows[i].longitude,
                        'date': rows[i].date
                    }

                    records.push(row);
                }

                resolve(records);
            }
        });

        client.end();
    });
}

module.exports.select = function (name) {
    return new Promise(function (resolve, reject) {
        var client = connect();

        var records = [];

        client.query('SELECT * FROM locations WHERE name=?', [name], function (error, rows, fields) {
            if (error) {
                return reject(error);
            } else {
                for (var i = 0; i < rows.length; i++) {
                    var row = {
                        'id': rows[i].id,
                        'name': rows[i].name,
                        'latitude': rows[i].latitude,
                        'longitude': rows[i].longitude,
                        'date': rows[i].date
                    }

                    records.push(row);
                }

                resolve(records);
            }
        });

        client.end();
    });
}

module.exports.insert = function (data) {
    return new Promise(function (resolve, reject) {
        let row = data;

        var client = connect();

        var sql = "INSERT INTO locations (name, latitude, longitude, date) VALUES (?, ?, ?, ?)";

        let today = new Date();

        client.query(sql, [row.name, row.latitude, row.longitude, data.date], function (error, result) {
            if (error) {
                return reject(error);
            } else {
                resolve(row);
            }
        });

        client.end();
    });
}

module.exports.clear = function () {
    return new Promise(function (resolve, reject) {
        var client = connect();

        var sql = "DELETE FROM locations";

        client.query(sql, function (error, result) {
            if (error) {
                return reject(error);
            } else {
                resolve(result);
            }
        });

        client.end();
    });
}

module.exports.delete = function (id) {
    return new Promise(function (resolve, reject) {
        var client = connect();

        var sql = "DELETE FROM locations WHERE id=" + id;

        client.query(sql, function (error, result) {
            if (error) {
                return reject(error);
            } else {
                resolve(result);
            }
        });

        client.end();
    });
}