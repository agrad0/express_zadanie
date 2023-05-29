const mongoose = require('mongoose')

const User = new mongoose.Schema({
    title: String,
    content: String,
    address: {}
}, {
    timestamps: true
})

module.exports = mongoose.model('User', User)