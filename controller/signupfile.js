
// const User=require("../model/user");
// const signupf=((req,res)=>{
//     res.json({"cghcgjh":"vhjv"});
// })
// module.exports={signupf};

// const User=require("../model/user");

// const jwtHelper=require("../middleware/jwthelper");

// const signupf = ((req, res) => {
//   const { name, email } = req.body;
//   if(!name||!email){
//    res.status(400).send({ message: "All field required" });
//   }
  
//   if(User.findOne({email}));
//   {
//     res.status(200).send({ message: "already registered"});

//   }
// const newUser= User.create({name,email});

// const jwtoken=jwtHelper.generateJWT({user_id:newUser._id});
// res.cookie("token", jwtoken).status(201).json({status: 'success',data:"User has been signedup"});

// });

// module.exports = { signupf };
const User = require("../model/user");
const jwtHelper = require("../middleware/jwthelper");
const bcrypt=require("bcrypt");

const signupf = async (req, res) => {
  const { name, email,password } = req.body;
  try {
    if (!name || !email|| !password) {
      return res.status(400).send({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).send({ message: "User already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });
    
    res.json({ status: 'success', data: "User has been signed up" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { signupf };


