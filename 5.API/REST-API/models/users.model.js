const {v4: uuidv4} = require('uuid');

const users = [
    {
        id: uuidv4(),
        username: 'Rajesh Gole',
        email: 'rajesh.gole@gmail.com'
    },
    {
        id: uuidv4(),
        username: 'Wasim Nahed',
        email: 'wasim.nahed@gmail.com'
    }
]

module.exports = users;