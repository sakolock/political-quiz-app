var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), 'data/choices.json');

module.exports = {
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8')).data;
  }
};