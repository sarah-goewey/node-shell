const fs = require('fs')

const cat = (args, callback) => {
    let output = ""
    args.forEach ((arg) => {
        fs.readFile(`./${arg}`, 'utf8', (err, data) => {
            if (err) {
                callback ('something went wrong')
            } else {
                output += data
            }
            callback (output)
        })
    })
    
}

// const cat = (args) => {
//     fs.readFile(`./${args[0]}`, 'utf8', (err, data) => {
//         if (err) {
//             done ('something went wrong')
//         } else {
//             done (data)
//         }
//     })

//     fs.readFile(`./${args[1]}`, 'utf8', (err, data) => {
//         if (err) {
//             done ('something went wrong')
//         } else {
//             done (data)
//         }
//     })
// }

module.exports = cat