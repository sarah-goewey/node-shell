const fs = require('fs')

const cat = (args) => {
    args.forEach ((arg) => {
        fs.readFile(`./${arg}`, 'utf8', (err, data) => {
            if (err) {
                throw err
            } else {
                process.stdout.write(data)
            }
        })
    })
    process.stdout.write('prompt > ');
}

module.exports = cat