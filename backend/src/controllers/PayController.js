const User = require('../models/User')

module.exports = {
   async update(req,res){
     const idpay = req.params.id
     const {cash} = await User.findById(idpay)
     const cashPay = cash
     const a = 10
     const idRecepetor = '5e10f7fe43016b41dc193238'
     const userReceptor =await User.findById(idRecepetor)
     const cashReceptor = userReceptor.cash
     const valueReceptor = cashReceptor + a 

   if(cashPay >= a){
      const value = cashPay - a
      User.updateOne(
         { _id:idpay }, 
         { $set: { cash: value }},
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
     res.json(await User.find())
   }
} 