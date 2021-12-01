const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const ordersSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true],
        ref:"Users"
        
    },
    paymentMethod:{
        type:String,
        required: [true]
    },
    deliveryAddress:{
        type:String,
        required:[true],
        trim:true,
        minlength:5,
    },
    phone:{
        type:String,
        required:[true, "phone number is required"],
        trim:true,
        // validate(value){
        //     if(!validator.isMobilePhone(value,['ar-EG'])) throw new Error("invalid phone number")
        // }

    },
    orderDetails:[
        {
        productname:{type:String},
        brand:{type:String},
        discription:{type:String},
        price:{type:Number},
        sale:{type:Number},
        quantity:{type:Number},
        total:{type:Number}
    }


    ],
    totalPrice:{
        type:Number,
       
    }
}, {
    timestamps:true
})




const Orders = mongoose.model("Orders", ordersSchema)
module.exports = Orders
