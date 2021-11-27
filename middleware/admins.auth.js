const jwt = require("jsonwebtoken")
const adminsModel = require("../models/admins.model")
const usersModel = require("../models/users.model")

const adminsAuth = async(req,res, next)=>{
    try{
        const token = req.header("Auth").replace("Bearer ", "")
        const decodedToken = jwt.verify(token, 'hello')
        const admin = await adminsModel.findOne({_id:decodedToken._id, 'tokens.token': token})
        if(!admin) throw new Error()
        req.admin=admin
        req.token=token
        next()
        
    }
    catch(e){
        res.status(500).send({apiStatus:false, message:"unauthorized=>this action for admins only"})
    }
}
const ownerAuth = async(req,res, next)=>{
    try{
        const token = req.header("Auth").replace("Bearer ", "")
        const decodedToken = jwt.verify(token, 'hello')
        const admin = await adminsModel.findOne({_id:decodedToken._id, 'tokens.token': token})
        if(!admin) throw new Error()
        if(admin.role!="owner") throw new Error()
        req.admin=admin
        req.token=token
        next()
        
    }
    catch(e){
        res.status(500).send({apiStatus:false, message:"you are not the owner"})
    }
}
const generalAuth = async(req,res, next)=>{
    try{
        const token = req.header("Auth").replace("Bearer ", "")
        const decodedToken = jwt.verify(token, 'hello')
        const admin = await adminsModel.findOne({_id:decodedToken._id, 'tokens.token': token})
        const user = await usersModel.findOne({_id:decodedToken._id, 'tokens.token': token})
        if(admin){
            req.admin=admin
            req.token=token
        } 
       else if(user){
           req.user=user
           req.token=token
       } else{
           throw new Error()
       }

        next()
        
    }
    catch(e){
        res.status(500).send({apiStatus:false, message:"unauthorized"})
    }
}
module.exports =  {adminsAuth , ownerAuth, generalAuth}