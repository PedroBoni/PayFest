//index,show , sorte , update , destroy
const User = require('../models/User')

module.exports = {
   async show(req,res){
      const user = await User.findById(req.params.id)
      return res.json(user)
   },
   async index(req,res){
      //const user = await User.findById(req.params.id)
      return res.send('foi')
   }
   
}
