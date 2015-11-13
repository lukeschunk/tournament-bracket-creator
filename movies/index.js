var express = require('express');

var bodyParser = require('body-parser');

var usersCtrl = require('./controllers/usersCtrl');

var app = express();

app.use(bodyParser.json()); //app.use automatically calls next, whereas next automatically calls next




app.get('/users', usersCtrl.index);
app.get('/users/:id', usersCtrl.index);

app.post('/users', usersCtrl.build);


app.put('/users', usersCtrl.update);

app.delete('/users', usersCtrl.destroy);






app.listen(3000, function() {
    console.log('listening on port 3000');
    
});