const express = require('express');
const app = express();
const hbs = require('express-handlebars')
const moongose = require('mongoose');

moongose.connect('mongodb://127.0.0.1:27017/ex-users');

app.use('/files', express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine('hbs', hbs.engine({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', 'hbs');

const userRouter = require('./routes/userRoutes');
app.use('/users', userRouter);

// console.log(userRouter)

app.listen(8080, function(){
    console.log('Serwer Node.js działa');
})

