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
// app.use('/', function( req, res, next ){
//     console.log('첫 페이지');
//     res.send('adfdsf');

// });


// app.use('/test', function (req, res, next) {
//     test = {page : 'test', desc : '테스트 페이지 미들웨어 시작'};
//     console.log('테스트 페이지 미들웨어 시작');   
//     next();
// });
  

// function handleHome(req, res){
//     res.send("hello");
// }

// app.get("/", handleHome);

// app.get("/test", function(req, res){
//     res.json({
//         key : '테스트 페이지입니다.'
//         ,middle : data
//         ,test_middle : test
//     });
// });

// app.post('/test',function( req, res, next ){
//     //res.json(req.params );
    
//     console.log( req.fields );
//     console.log( req.files );

//     if( req.fields.id == 'test' ) {
//         console.log( '테스트 설정을 적용합니다.' );
//         next();
//     } else {
//         res.send( '어서오세요 환영합니다.' );
//     }

        
//     // res.json( req.files );    
// }, function( req, res, next ){
//     res.send( '테스트 계정으로 접속하셨습니다.' );
// });


// app.get("/jsonstr", function(req, res){
//     res.send({key : 'value'});
// });

// app.get("/json", function(req, res){
//     res.json({
//         key : 'value'
//         ,middle : data
//         ,test_middle : test
//     });
// });

// app.get("/status", function(req, res){
//     res.status(200).send('이런식으로');
// });

// app.get("/sstatus", function(req, res){
//     res.sendStatus(403);
// });

// app.route('/book/:id')
//     .get(function(req, res, next) {
//         res.send('id : ' + req.params.id );
//         next();
//     })
//     .post(function(req, res) {
//         res.json(req.params );        
//     })
//     .put(function(req, res) {
//         res.send('id : ' + req.params.id );
//     });


    