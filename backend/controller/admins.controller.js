const adminsModel = require("../models/admins.model")
class Admins {
    //create admin
    static add = async(req, res) =>{
        try{
            const adminsData = new adminsModel(req.body)
            await adminsData.save()
            res.status(200).send({apiStatus:true, message:"data added successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //admins login
    static login = async(req,res)=>{
        try{
            const admin = await adminsModel.adminsLogin(req.body.email, req.body.password)
            const token = await admin.generateToken()
            res.status(200).send({apiStatus:true, message:"success you are logged in", data: {token,admin}})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //show all admins
    static allAdmins = async(req, res)=>{
        try{
            const adminsData = await adminsModel.find()
            res.status(200).send({apiStatus:true, message:"All Admins", data: adminsData})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //show logged in admin details
    static profile =async(req,res)=>{
        res.send(req.admin)
    }
    //logout from all
    static logoutAll=async(req,res)=>{
        try{
            req.admin.tokens=[]
            await req.admin.save()
            res.send({'done':"done"})
        }
        catch(e){
            res.send({e})
        }
    }
    //logout
    static logout =async(req,res)=>{
        req.admin.tokens= req.admin.tokens.filter(t=>{
            return t.token!= req.token
        })
        await req.admin.save()
        res.send('done')
    }
    //delete admin
    static deleteAdmin = async(req,res)=>{
        try{
            //check admin role
            const adminRole= await req.admin.role
            if(adminRole!="owner") throw new Error("this action only for owner")
            const admin = await adminsModel.findByIdAndDelete(req.params.id)
            if(!admin) throw new Error("admin not found")
            res.send({
                apiStatus: true,
                message:"admin deleted",
                data:admin
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
    //edit admin data
    static edit = async(req,res)=>{
        try{
            let adminData = await adminsModel.updateOne({_id:req.admin._id},req.body,{runValidators:true} )
            if(!adminData) throw new Error ("Admin not found")  
            res.status(200).send({apiStatus:true, message:"data updated successfuly"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
}

module.exports = Admins
