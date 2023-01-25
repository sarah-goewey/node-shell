const done = require('./done')

const pwd = () => {
    done (`${process.cwd()}`)
}

module.exports = pwd