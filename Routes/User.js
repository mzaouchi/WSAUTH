const express = require('express')
const { SignUp, SignIn } = require('../Controllers/User');
const { isAuth } = require('../Middlewares/isAuth');
const { registerValidation, Validation, logValidation } = require('../Middlewares/RegisterValidator');


const userRouter = express.Router()


userRouter.post('/SignUp',registerValidation,Validation,SignUp)


userRouter.post('/SignIn',logValidation,Validation,SignIn)

userRouter.get('/GetUser',isAuth,(req,res)=>res.send(req.user))

module.exports = userRouter