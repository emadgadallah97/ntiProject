const usersModel = require("../models/users.model")
class Users {
    //create user
    static register = async(req, res) =>{
        try{
            const usersData = new usersModel(req.body)
            await usersData.save()
            res.status(200).send({apiStatus:true, message:"data added successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //users login
    static login = async(req,res)=>{
        try{
            const user = await usersModel.usersLogin(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.status(200).send({apiStatus:true, message:"success you are logged in", data: {token,user}})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    // //show all users
    static allUsers = async(req, res)=>{
        try{
            const usersData = await usersModel.find()
            res.status(200).send({apiStatus:true, message:"All users", data: usersData})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //show logged in user details
    static profile =async(req,res)=>{
        res.send(req.user)
    }
    //logout from all
    static logoutAll=async(req,res)=>{
        try{
            req.user.tokens=[]
            await req.user.save()
            res.send({'done':"done"})
        }
        catch(e){
            res.send({e})
        }
    }
    //logout
    static logout =async(req,res)=>{
        req.user.tokens= req.user.tokens.filter(t=>{
            return t.token!= req.token
        })
        await req.user.save()
        res.send('done')
    }
    //delete user
    static deleteUser = async(req,res)=>{
        try{
            const user = await usersModel.findByIdAndDelete(req.params.id)
            if(!user) throw new Error("user not found")
            res.send({
                apiStatus: true,
                message:"user deleted",
                data:user
            })
        }
        catch(e){
            res.send({
                apiStatus:false,
                data:e.message,
                message:"error on delete try agin"
            })
        }
    }
    // //edit user data
    static edit = async(req,res)=>{
        try{
            let userData = await usersModel.updateOne({_id:req.user._id},req.body,{runValidators:true} )
            if(!userData) throw new Error ("User not found")  
            res.status(200).send({apiStatus:true, message:"data updated successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //add product to cart
    static addToCart = async(req,res)=>{
        try{
          let finalPrice=req.body.price - ((req.body.sale * req.body.price)/100)
           let totalp= finalPrice * req.body.quantity
        req.body.total=totalp
            const user = await usersModel.updateOne({ _id: req.user._id },{ $push: { cart: req.body} })
            res.status(200).send({apiStatus:true, message:"data added successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
}

module.exports = Users
