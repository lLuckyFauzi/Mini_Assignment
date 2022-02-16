const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        res.status(401).json({message: 'We need you to Login first!'})
    }

    const decode = jwt.decode(token, "Secret")
    if(!decode){
        res.status(404).json({message: 'Data not Found!'})
    }
    req.payload = decode;   
    next()
}

module.exports = {
    authentication
}