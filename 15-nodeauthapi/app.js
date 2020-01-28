const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'API Home'
    });
});

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'key', (err, userData) => {
        if(err){
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post Created',
                userData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    //Mock User: Authentication takes place here
    const user = {
        id: 1,
        username: 'Hasnain',
        type: 'Admin'
    }

    //Returns a token to request access to a protected route
    jwt.sign({user: user}, 'key', {expiresIn: "15 minutes"}, (err, token) => {
        res.json({
            token: token
        });
    });
});

// Token format: Bearer Token
// Authorization: Bearer <token> (token needs to be retrieved)

//Middleware function
function verifyToken(req, res, next){
    // Get authorization header value
    // When the token is sent, we want to send it in the header (Bearer Auth)
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        //Retrieve the token from Bearer header
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        //Set token
        req.token = bearerToken;
        next();
    } else {
        // 403: Forbidden
        res.sendStatus(403);
    }
}

app.listen(5000, () => console.log("Server started on port 5000"));