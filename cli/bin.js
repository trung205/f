#!/usr/bin/env node
var f = require('../lib/f.js');
var name = process.argv[2];
var argv = process.argv.slice(3).map(function(arg) {
  return arg.indexOf(' ') > -1 ? '"' + arg + '"' : arg;
});
f(name, 'command')(argv.join(' '), function(err, response) {
  if (err) {
    return console.error(err);
  }
  console.log(response);
});
