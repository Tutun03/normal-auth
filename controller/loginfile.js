const User=require("../model/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// module.exports = { loginf };
const loginf = async(req, res) => {
    
    const { email, password } = req.body;

    if(!email||!password){
        res.status(400).send({ message: "All field required" });
    }
    const user  = await User.findOne({email});
    // console.log(user);
    if(user && (bcrypt.compare(password,user.password))){ 
        const accessToken=jwt.sign({
            user:{
                password:user.password,
                name:user.name,
                email:user.email,
            },
        
        },"aniket",
        {expiresIn:"15min"}
        )
        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
    }
  };
  
  module.exports = { loginf };
  