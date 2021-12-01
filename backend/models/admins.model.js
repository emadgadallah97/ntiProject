const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const adminsSchema = new mongoose.Schema({
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
        validate(value){
            if(!validator.isEmail(value)) throw new Error("Invalid Email Format")
        }
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        trim:true,
        minlength:6,
       //match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    },
    phone:{
        type:String,
        required:[true, "phone number is required"],
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value,['ar-EG'])) throw new Error("invalid phone number")
        }

    },
    // type:{
    //     type:String,
    //     value:"admin"
        
    // },
    role:{
        type:String,
        enum:["owner","superAdmin","admin"],
        required:[true, "you must be enter the role"]
    },
    tokens:[
        {token:{type:String, required:true}}
    ]
}, {
    timestamps:true
})

//password hashing
adminsSchema.pre('save', async function(){
    const admin = this
    if(admin.isModified("password")) admin.password = await bcrypt.hash(admin.password, 8)
})
//hide password from show all admins
adminsSchema.methods.toJSON = function(){
    const admin = this.toObject()
    let deleted = ["password","__v"]
    deleted.forEach(d=> delete admin[d])
    return admin
}
//admins login
adminsSchema.statics.adminsLogin = async(email, password)=>{
    const admin = await Admins.findOne({email})
    if(!admin) throw new Error("invalid email address")
    const isValid = await bcrypt.compare(password, admin.password)
    if(!isValid) throw new Error("invalid password")
    return admin
}
//generate admins tokens
adminsSchema.methods.generateToken = async function(){
    const adminData = this
    const token = jwt.sign({_id:adminData._id}, "hello")
    adminData.tokens = adminData.tokens.concat({token})
    adminData.save()
    return token
}
const Admins = mongoose.model("Admins", adminsSchema)
module.exports = Admins
