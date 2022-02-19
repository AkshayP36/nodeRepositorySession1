const jwt = require("jsonwebtoken");

const verify = (req, res, next)=>{
    // 1. Read the token.
    const token = req.headers["authorization"];
    
    // 2. Is token exists
    if(!token){
        return res.status(401).send("Unauthorized");
    }

    // 3. Is token valid.
    try{
        const payload = jwt.verify(token, "This is my secret key");
        req.user = payload;
    }catch(err){
        return res.status(401).send("Token is invalid");
    }
    next();
}

module.exports = verify;