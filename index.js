const express = require('express');
const app = express();
const hbs = require('express-handlebars')
const moongose = require('mongoose');

moongose.connect('mongodb://127.0.0.1:27017/ex-users');

app.use('/files', express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine('hbs', hbs.engine({
    extname: '.hbs',
    helpers: {
        inc: function (value, options) {
            return parseInt(value) + 1;
        }
    }
}))
app.set('view engine', 'hbs');

const userRouter = require('./routes/userRoutes');
app.use('/users', userRouter);

app.listen(8080, function () {
    console.log('Serwer Node.js działa');
})

