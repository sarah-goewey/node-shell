const fs = require('fs')
const done = require('./done')

const ls = () => {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
          done ('something went wrong!')
        } else {
          done (files.join('\n'))
        }
      });
}

module.exports = ls