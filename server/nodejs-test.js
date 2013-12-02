var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(__dirname + '/cert/privatekey.pem').toString();
var certificate = fs.readFileSync(__dirname + '/cert/certificate.pem').toString();

var express = require('express');

var app = express();

//console.log("%o", fs);
//console.log("%s", privateKey);
//console.log("%s", certificate);
console.log("%o", express);
console.log("%o", app);