export interface User {
  name:String
  email:String
  password:String
  phone:String
  birthDate:Date
  cart?:[{
    productname:String
    brand:String
    discription:String
    price:Number
    sale:Number
    quantity:Number
    total:Number
        }]
  tokens?:[{token:String}]


}

