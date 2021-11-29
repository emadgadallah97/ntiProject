const multer = require("multer")
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        let loc
        if(!req.params.id) loc = "uploads/"
        else loc = path.join("uploads", (req.params.id))  // uploads/5
        fs.mkdir(loc, (err)=>{})
        cb(null, loc)
    },
    filename: function(req, file, cb){
        let name = file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        cb(null, name)
    }
})


const upload = multer({
    storage,
    limits:{ fileSize:1500000 },
    fileFilter: function(req, file, callback){
        //  ext = path.extname(file.originalname)
        //  if(ext!=".png" ||ext!=".jpg") return callback(new Error('invalid extension'))
        callback(null, true)
    }
})

module.exports = upload