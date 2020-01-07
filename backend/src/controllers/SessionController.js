//index,show , sorte , update , destroy
const User = require('../models/User')

module.exports = {
   async store(req,res){
      const { email } = req.body
      const {title} = req.body

      let user = await User.findOne({email})

      if(!user){
        user = await User.create({email,title})
      }

      return res.json({user})
   }
}