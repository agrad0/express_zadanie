const User = require('../models/UserModel');

module.exports = {
    index: (req, res) => {

       User.find()
            .lean().then((users) => {
                res.render('/users', { users: users })


            }).catch((err) => {
                console.log(err)
            })
    }
}