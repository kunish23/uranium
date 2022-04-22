//const auth= require("../middleware/auth")


const auth= function(req,res,next){

    const header = req.headers["x-Auth-token"]
    if(header){
        if(header === "true")
        req['x-Auth-token'] = true
        if(header === "false")
        req['x-Auth-token'] = false
        next()
    }
    else res.send({msg: "header is missing"})
}

module.exports.auth=auth