import express from 'express'
const router=express.Router()

router.get('/',(req,res)=>{
    console.log("user api ");
    res.send("userApi")
})

export default router