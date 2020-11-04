const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

const urlencodedParser = bodyparser.urlencoded({extended: false})
const data = [];
app.get('/', (req, res) =>
    res.render('index', {data: data}));
app.get('/create', (req, res) =>
    res.render('create'));

app.post('/create', urlencodedParser, (req, res) => {
    data.push({
        name: req.body.name,
        type: req.body.type,
        a_img: req.body.a_img
    });
    res.redirect('/');
});

app.listen(9000, () => console.log(`example app listening on port 9000`));