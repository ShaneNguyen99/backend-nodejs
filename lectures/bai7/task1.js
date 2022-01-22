const mySql = require('mysql2');
const myConnection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678'
});

myConnection.connect(err => {
    if (err) {
        console.error(err);
    }
    console.log('db Connected!');
    let createEmployeeTable = `create database if not exists employee`;
    myConnection.query(createEmployeeTable, (err, result, fields) => {
        if (err) throw new Error(err);
        console.log('Database successfully created');
    });
    return;
});
