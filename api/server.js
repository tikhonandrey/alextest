//todo generate fake data
const path = require('path');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jsonServer = require('json-server');

const TEST_USER_DATA = {
    "uid": "test@test.com",
    "provider": "email",
    "email": "test@test.com",
    "favorite_color": null,
    "id": 7
};

var app = jsonServer.create();
var router = jsonServer.router(path.join(__dirname, 'mock.json'));
var middlewares = jsonServer.defaults({
    noCors: true //свой корс
});
// Set default middlewares (logger, static, cors and no-cache)
app.use(middlewares);
var corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use('/api/', cors(corsOptions), (req, res, next)=>{next()});


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
app.use(jsonServer.bodyParser);
//todo auth email
app.post('/api/sign_in', (req, res, next)=>{
    const body = req.body;

    if(body){
        res.jsonp(
            Object.assign(body, TEST_USER_DATA, {
                name: body.type == 'email' ? body.login :body.name
            })
        );
    }
});


// Use default router
app.use('/api', router);
app.listen(3000, function () {
    console.log('JSON Server is running')
});