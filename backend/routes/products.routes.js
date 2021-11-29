const router = require("express").Router()


const upload = require('../middleware/fileUpload')
const productsController = require("../controller/products.controller")
const usersAuth = require("../middleware/users.auth")
const {adminsAuth,ownerAuth,generalAuth} = require("../middleware/admins.auth")

router.post('/add',adminsAuth, productsController.add)
router.get('', productsController.allProducts)
router.get('/:id',generalAuth, productsController.product)
router.post('/edit/:id',adminsAuth, productsController.edit)
router.delete('/delete/:id',adminsAuth, productsController.deleteProduct)
router.post('/:id/addToCart',usersAuth, productsController.addToCart)

router.post('/:id/addImage', adminsAuth, upload.array('img'),productsController.addImage )
module.exports = router
