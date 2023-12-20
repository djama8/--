const express = require('express');
const QRCode = require('qrcode');

const app = express();


app.set('view engine', 'hbs');

app.use(express.static('public'));
app.get('/', function(req, res){
    res.render('index.hbs')
})

app.get('/generate', function(req, res){
    const link = req.query.link;
    
    QRCode.toBuffer(link, function(err, url){
        console.log(url);

        res.render('index.hbs', {qrcode: url.toString('base64')});
    })

    
})



app.listen('3001');