const mongoose = require('mongoose')

const User = new mongoose.Schema({
    content: {}
}, {
    timestamps: true
})

module.exports = mongoose.model('User', User)