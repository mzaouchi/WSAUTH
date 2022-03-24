const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../Models/User');

exports.SignUp=async(req,res)=>{
    try {
        const {email,password} = req.body
        
        const found = await User.findOne({email})

        if(found){ return res.status(400).send({errors : [{msg : 'Email already exist'}]})}

        const newUser = new User(req.body)

        // const saltRounds = 10
        // const salt = bcrypt.genSaltSync(saltRounds);
        const salt = 10
        const hashedPassword = bcrypt.hashSync(password, salt);

        newUser.password = hashedPassword

        const payload = {id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey);

        newUser.save()

        res.status(200).send({msg : 'User registred with success',newUser,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not register'}]})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){return res.status(400).send({errors : [{msg :'Wrong email'}]})}

        const match = await bcrypt.compare(password, found.password);

        if(!match){return res.status(400).send({errors : [{msg : 'Wrong password'}]})}

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '24h' });

        res.status(200).send({msg :'Logged in',found,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not logged in'}]})
    }
}