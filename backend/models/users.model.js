const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"],
        trim:true,
        maxlength:20,
        
    },
    email:{
        type:String,
        required: [true, "Email is Required"],
        unique: [true, "Email used before"],
        trim:true,
        lowercase:true,
        // validate(value){
        //     if(!validator.isEmail(value)) throw new Error("Invalid Email Format")
        // }
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        trim:true,
        minlength:6,
       // match:'/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/',
    },
    phone:{
        type:String,
        required:[true, "phone number is required"],
        trim:true,
        // validate(value){
        //     if(!validator.isMobilePhone(value,['ar-EG'])) throw new Error("invalid phone number")
        // }

    },
    role:{
        type:String,
    },
    birthDate:{
        type:Date
    },
    cart:[
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
    tokens:[
        {token:{type:String, required:true}}
    ]
}, {
    timestamps:true
})

//password hashing
usersSchema.pre('save', async function(){
    const user = this
    if(user.isModified("password")) user.password = await bcrypt.hash(user.password, 8)
})
// //hide password from show all users
usersSchema.methods.toJSON = function(){
    const user = this.toObject()
    let deleted = ["password","__v"]
    deleted.forEach(d=> delete user[d])
    return user
}
// //users login
usersSchema.statics.usersLogin = async(email, password)=>{
    const user = await Users.findOne({email})
    if(!user) throw new Error("invalid email address")
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) throw new Error("invalid password")
    return user
}
//generate users tokens
usersSchema.methods.generateToken = async function(){
    const userData = this
    const token = jwt.sign({_id:userData._id}, "hello")
    userData.tokens = userData.tokens.concat({token})
    userData.save()
    return token
}
//show user orders
usersSchema.virtual('userOrders',{
    ref:"Orders",
    localField:"_id",
    foreignField:"userId"
})

const Users = mongoose.model("Users", usersSchema)
module.exports = Users
