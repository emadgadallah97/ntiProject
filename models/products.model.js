const mongoose = require("mongoose")
const validator = require("validator")
const productsSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:[true, "name is required"],
        unique: [true, "product added before"],
        trim:true,
        maxlength:40,
        minlength:5
        
    },
    category:{
        type:String,
        required:[true, "category is required"],
        trim:true,
        maxlength:20,
        
    },
    brand:{
        type:String,
        required:[true, "brand is required"],
        trim:true,
        maxlength:20,
        
    },
    price:{
        type:Number,
        required: [true, "price is Required"],
        trim:true,
        validate(value){
            if(value<1) throw new Error("Invalid price")
        }
    },
    sale:{
        type:Number,
        trim:true,
    },
    amount:{
        type:Number,
        required: [true, "amount is Required"],
        trim:true,
        validate(value){
            if(value<1) throw new Error("Invalid amount")
        }
    },
    discription:{
        type:String,
        required:[true, "description is required"],
        trim:true,
        minlength:10,
        maxlength:100
    },
    total:{
        type:Number
    },
    quantity:{
        type:Number
    },
    images:[
        {image:{type:String,trim:true}}
    ]
}, {
    timestamps:true
})





const Products = mongoose.model("Products", productsSchema)
module.exports = Products
