const jwt = require("jsonwebtoken");
const isAuthenticatedUser = (req, res, next) => {
    //console.log(req.headers);
    const bearerHeader = req.headers.authorization;    
    if(typeof bearerHeader!=='undefined') {
        const bearer = bearerHeader.split(' ');    
        let token = bearer[1];
        //console.log(token);
        if(token === 'null'){
            return res.status(401).send('Unauthorized Request');
        }
        else {
            try {
                let decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                console.log(decode.userId, decode.email, decode.iat, decode.exp);
            }  
            catch(e){
                //console.log(e);
                if(e.name == 'JsonWebTokenError') {
                    return res.status(401).send('Unauthorized Request'); 
                }  
            }
            next();
        }
    } 
    else {
        return res.status(401).send('Unauthorized Request');
    }
};

module.exports = isAuthenticatedUser;