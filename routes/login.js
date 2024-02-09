const express=require("express");
const router=express.Router();

const {loginf}=require("../controller/loginfile");

router.route("/").post(loginf);

module.exports=router;