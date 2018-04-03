const express=require('express');

const bodyparser=require('body-parser');
const app = express();

app.listen(4000)
const limit = require('./routes/limit')
app.use(bodyparser.urlencoded({}));

app.use('/limit',limit);

app.use(express.static('./public'));
