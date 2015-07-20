var fs = require('fs');

module.exports = function() {
  printHelpMessage();
  process.exit(1);
};

function printHelpMessage() {
  var options = {encoding: 'utf8'};
  var message = fs.readFileSync('./app/helpmessage.txt', options);
  console.log(message);
}

// previous module.exports.printHelpMessage = printHelpMessage;

