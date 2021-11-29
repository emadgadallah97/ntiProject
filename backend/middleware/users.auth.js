const jwt = require("jsonwebtoken")
const usersModel = require("../models/users.model")

const auth = async(req,res, next)=>{
    try{
        const token = req.header("Auth").replace("Bearer ", "")
        const decodedToken = jwt.verify(token, 'hello')
        const user = await usersModel.findOne({_id:decodedToken._id, 'tokens.token': token})
        if(!user) throw new Error()
        req.user=user
        req.token=token
        next()
        
    }
    catch(e){
        res.status(500).send({apiStatus:false, message:"unauthorized"})
    }
}
module.exports = auth