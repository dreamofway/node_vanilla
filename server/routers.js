/** 
 * ---------------------------------------------------
 * service router 설정
 * ---------------------------------------------------
 * History
 * ---------------------------------------------------
 * 
 * [v1.0.0] 21.01.11 - 이정훈
 * 
 * ---------------------------------------------------
*/

'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

var server_root = path.dirname( __dirname );

router.use(function(req, res, next){    
    
    console.log( 'server_root : ' + server_root );
    console.log('접속 기록 적재');

    res.locals.server_root = path.join( server_root, 'views' ) ;

    next();
});

router.get('/', function( req, res, next ){
    console.log('첫 페이지');

    // res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.render('html/index', {
        data : ''
    });


});

module.exports = router;