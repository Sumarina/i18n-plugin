const fs = require('fs');
const path = require('path');

const staticpath = path.join(__dirname, '/files');
function write(language) {
  const filedir = `./files/i18n.${language}.json`;
  fs.open(filedir, 'a', 0644, (error, fd) => {
    console.log('error', error);
    console.log('fd', fd);
  });
}

module.exports = {
  write
};
