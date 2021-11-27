const router = require("express").Router()


const ordersController = require("../controller/orders.controller")
const usersAuth = require("../middleware/users.auth")
const {adminsAuth,ownerAuth,generalAuth} = require("../middleware/admins.auth")

router.post('/add',usersAuth, ordersController.add)
router.get('',generalAuth, ordersController.userOrders)
router.post('/makeOrder',generalAuth, ordersController.order)

//router.get('/:id',generalAuth, productsController.product)
//router.post('/edit/:id',usersAuth, productsController.edit)
//router.delete('/delete/:id',generalAuth, productsController.deleteOrder)
module.exports = router