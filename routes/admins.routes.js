const router = require("express").Router()


const adminsController = require("../controller/admins.controller")
const {adminsAuth,ownerAuth} = require("../middleware/admins.auth")


 router.post('/add',ownerAuth, adminsController.add)
 router.get('',adminsAuth, adminsController.allAdmins)
 router.post('/login', adminsController.login)
 router.get('/profile', adminsAuth, adminsController.profile)
router.post('/logoutAll', adminsAuth,adminsController.logoutAll) 
router.post('/logout', adminsAuth,adminsController.logout)
router.post('/edit', adminsAuth,adminsController.edit)
router.delete('/delete/:id',ownerAuth, adminsController.deleteAdmin)
module.exports = router