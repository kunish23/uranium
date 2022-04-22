//const auth= require("../middleware/auth")

const jwt  = require("jsonwebtoken");


const auth= function(req,res,next){

    const header = req.headers["x-Auth-token"];
    if(!header) header= req.headers["x-auth-token"];
    if(header) return res.send({ status: false, msg: "token must be present"});
    console.log(header);
    let decodedToken = jwt.verify(header, "functionup-thorium");
    if(!decodedToken){
        return res.send({status: false,msg: "token is inavalid"});
    }
    next()
       
    
}

module.exports.auth=auth