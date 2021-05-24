const irisnative = require('intersystems-iris-native');

let connectionInfo = {
    host: 'iris', 
    port: 1972,
    ns: 'USER', 
    user: '_SYSTEM',
    pwd: 'SYS' 
};
// create database connection
const connection = irisnative.createConnection(connectionInfo);

//create IRIS instance
const iris = connection.createIris();
console.log(iris.getAPIVersion());
