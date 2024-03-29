const User = require('../models/user');

exports.userById = (req, res, next, id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error: "User not found"
            })
        }
        res.profile = user //adds profile object in req with user info
        next();
    })
};

exports.hasAuthorization = (req, res ,next )=>{
    const authorized = req.profile && req.auth && req.profile._id ===res.auth._id;
    if(!authorized){
        return res.status(401).json({
            error : "User is not authorized to perform this action"
        });
    }
};

exports.allUsers= (req,res)=>{
    User.find((err, users)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json({users});
    }).select("name email updated created");
};

exports.getUser = (req,res)=>{
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile);
};