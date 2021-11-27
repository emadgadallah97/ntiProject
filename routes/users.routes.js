const router = require("express").Router()


const usersController = require("../controller/users.controller")
const usersAuth = require("../middleware/users.auth")
const {adminsAuth,ownerAuth} = require("../middleware/admins.auth")

router.post('/register', usersController.register)
router.get('/allUsers',adminsAuth, usersController.allUsers)
router.post('/login', usersController.login)
router.get('/profile', usersAuth, usersController.profile)
router.post('/logoutAll', usersAuth,usersController.logoutAll) 
router.post('/logout', usersAuth,usersController.logout)
router.post('/edit', usersAuth,usersController.edit)
router.delete('/delete/:id',adminsAuth, usersController.deleteUser)
router.post('/addToCart', usersAuth,usersController.addToCart)
module.exports = router
