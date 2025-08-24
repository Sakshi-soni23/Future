import jwt from "jsonwebtoken";
const usertoken = (userId , res)=>{
    const token = jwt.sign({userId},process.env.Jwt_token,{
        expiresIn:"30d",
    });
    res.cookie("jwt",token,{
        httpOnly:true,
        secure:true,
        sameSite:true,
    })
}
export default usertoken;