const jwt=require('jsonwebtoken');

const generateJWT= (data)=>{
    const secretkey="aniket";
    const options={
        algorithm: 'HS256',
    };
    return jwt.sign(data,secretkey,options);
};

const decodeJWT= (token)=>{
    const secretkey="aniket";
   return jwt.verify(token,secretkey);
};

module.exports={generateJWT, decodeJWT};