const User = require('../models/User')

module.exports = {
   async update(req,res){
     const {idPay} = req.body
     const {cash} = await User.findById(idPay)
     const cashPay = cash
     
     const {value} = req.body
     
     const {idRecepetor} = req.body
     const userReceptor = await User.findById(idRecepetor)
     const cashReceptor = userReceptor.cash
     const valueReceptor = cashReceptor + value

   if(cashPay >= value){
      const valuePay = cashPay - value
      User.updateOne(
         { _id:idPay }, 
         { $set: { cash: valuePay }},
         function (err, raw) {
          if (err) {return `erro ${err}` }
         }
      )
     }
     User.updateOne(
        { _id:idRecepetor }, 
        { $set: { cash: valueReceptor }},
        function (err, raw) {
         if (err) {return `erro ${err}` }
        }
     )
     res.send('Pay Confirm!')
   }
} 