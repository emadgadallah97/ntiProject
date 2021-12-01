const productsModel = require("../models/products.model")
const usersModel = require("../models/users.model")
const fs = require("fs")

class Products {
    //create product
    static add = async(req, res) =>{
        try{
            const productsData = new productsModel(req.body)
            await productsData.save()
            res.status(200).send({apiStatus:true, message:"product added successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
   
  //show all products
    static allProducts = async(req, res)=>{
        try{
            const productsData = await productsModel.find()
            res.status(200).send({apiStatus:true, message:"All products", data: productsData})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //show single product
    static product =async(req,res)=>{
        try{
            const product = await productsModel.findById(req.params.id)
            if(!product) throw new Error("product not found")
            res.send({data:product})
        }
        catch(e){
            res.send({
                apiStatus:false,
                data:e.message,
            })
        }
    }
   
  
    //delete product
    static deleteProduct = async(req,res)=>{
        try{
            const product = await productsModel.findByIdAndDelete(req.params.id)
            if(!product) throw new Error("product not found")
            res.send({
                apiStatus: true,
                message:"product deleted successfuly",
                data:product
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
    //edit product data
    static edit = async(req,res)=>{
        try{
            const product = await productsModel.updateOne({
                _id:req.params.id
            },
                { name: req.body.name ,
                 email: req.body.email ,
                 phone: req.body.phone ,
                 birthDate: req.body.birthDate }
                )
            res.status(200).send({apiStatus:true, message:"data updated successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //add produt to user cart
    static addToCart = async(req, res) =>{
        try{
            let productData=await productsModel.findById(req.params.id)
            let finalPrice=productData.price - ((productData.sale * productData.price)/100)
            let totalp= finalPrice * req.body.quantity
            let newAmount=productData.amount-req.body.quantity
            productData.total=totalp
            productData.quantity=req.body.quantity
        const ordersData = await usersModel.updateOne({ _id: req.user._id },{ $push: { cart: productData}})
        const updateAmount=await productsModel.findByIdAndUpdate(req.params.id,{amount:newAmount})
            res.status(200).send({apiStatus:true, message:"order added successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //add product image
    // static addImage = async(req, res) =>{
    //     try{
    //         req.files.forEach(async function(e,i) {
    //         const imgPath="uploads/"+ req.params.id +"/"+ req.files[i].filename
    //         const productImg = await productsModel.updateOne({ _id: req.params.id }
    //             ,{ $push: { images:[{image:imgPath}] } })
    //         })
    //         res.status(200).send({apiStatus:true, message:"image added successfuly"})
    //     }
    //     catch(e){
    //         res.send({e})
    //     }
    
    // }
    static addImage = async(req, res) =>{
        try{
            req.files.forEach(async function(e,i) {
            const imgPath="assets/productsImages/"+ req.params.id +"/"+ req.files[i].filename
            const productImg = await productsModel.updateOne({ _id: req.params.id }
                ,{ $push: { images:[{image:imgPath}] } })
            })
            res.status(200).send({apiStatus:true, message:"image added successfuly"})
        }
        catch(e){
            res.send({e})
        }
    
    }
}

module.exports = Products
