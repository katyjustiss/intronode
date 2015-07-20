var fs = require('fs');
var Converter = require('csvtojson').Converter;

module.exports = function(filePath) {
  var csvConverter = new Converter();
  csvConverter.on("end_parsed",function(jsonObj){
    console.log(jsonObj);
  });
  fs.createReadStream(filePath)
    .pipe(csvConverter);
};
