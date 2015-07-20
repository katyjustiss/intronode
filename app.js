#!/usr/bin/env node
var argv = require('yargs')
  // .default({'name': 'World'})
  .argv;

//prompt module
var prompt = require('prompt');

//filesystem module
var fs = require('fs');

//linking other files
var help = require('./app/help');
var bigfile = require('./app/bigfile');
var zipFile = require('./app/zipfile');
var csv = require('./app/csv');

//HELP MENU
if (argv.help) {
  help();
}

if (argv.file) {
  zipFile(argv.file);
}

if (argv.csv) {
  csv(argv.csv);
}

  prompt.override = argv;
  prompt.message = '';
  prompt.delimiter = '';
  prompt.start();

  prompt.get('name', function (err, result) {
    printHelloMessage(result.name);

    //VARIOUS CONSOLES
    // process.stderr.write('OMG HELP!\n');
    // console.error('Help me jeebus...');

  });

function printHelloMessage(name) {
  console.log('Hello ' + name + '!');
  //print the bigfile
  // var big = fs.createReadStream('./app/bigfile');
  // big.pipe(process.stdout);
  process.stdout.write('Hello ' + name + ' Again!\n');
}
