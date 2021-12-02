const ordersModel = require("../models/orders.model")
const usersModel = require("../models/users.model")

class Orders {
    //add order
    static add = async(req, res) =>{
        try{
            const ordersData = new ordersModel({...req.body,userId:req.user._id})
            await ordersData.save()
            res.status(200).send({apiStatus:true, message:"order added successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //show all oredrs
    static allOredrs = async(req, res)=>{
        try{
            const oredrsData = await ordersModel.find()
            res.status(200).send({apiStatus:true, message:"All orders", data: oredrsData})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //show user orders
    static userOrders= async(req,res)=>{
        try{
            await req.user.populate({
                path:"userOrders"
            })
            res.status(200).send({
            apiStatus:true,
            message: "my orders",
            data:req.user.userOrders
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:e.message
        })
    }
    }
    //move orders from cart
    static order = async(req, res) =>{
        try{
            const userData=await usersModel.findById(req.user.id)
            const userCart=userData.cart
            let  totalp=0
            userCart.forEach(t => {
                    totalp+=t.total
                }) 
        const ordersData = await ordersModel.insertMany(
            {userId:req.user._id,...req.body,orderDetails: userCart ,totalPrice:totalp })
            //empty user cart
            const clearCart=await usersModel.findByIdAndUpdate(req.user.id,{cart:[]})

            res.status(200).send({apiStatus:true, message:"order added successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    
}

module.exports = Orders
