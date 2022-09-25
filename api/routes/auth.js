import express from 'express'
const router=express.Router()

router.get('/',(req,res)=>{
    console.log("auth api ");
})

export default router