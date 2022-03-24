const { body, validationResult } = require('express-validator');

exports.registerValidation = [
        body('name',"Name must contain at least 6 caractere").isLength({min : 6}),
        body('email',"Please enter a valid email").isEmail(),
        body('password','Password must contain at least 6 caractere').isLength({min : 6})
]

exports.logValidation = [
        
    body('email',"Please enter a valid email").isEmail(),   
]


exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}