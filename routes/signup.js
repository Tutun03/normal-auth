const express=require("express");
const router=express.Router();






router.use(express.json());
const {signupf}=require("../controller/signupfile");

router.route("/").post(signupf);


module.exports=router;