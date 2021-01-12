/** 
 * ---------------------------------------------------
 * server start
 * ---------------------------------------------------
 * History
 * ---------------------------------------------------
 * 
 * [v1.0.0] 21.01.06 - 이정훈
 * 
 * ---------------------------------------------------
*/
'use strict';

const express = require('express');
const app = express();
const formidableMiddleware = require('express-formidable');


const routers = require('./server/routers');



app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

app.use(express.static(__dirname + '/views'));
app.use(formidableMiddleware());
app.use('/', function(req, res, next){
    console.log( app.get('views')  );
    next();
});
app.use('/', routers);
    