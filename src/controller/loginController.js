const jwt = require('jsonwebtoken');
const Users = require('../models').Users;

exports.loginController = async (req,res) => {
    const {user, password } = req.body;
    const isExist = await Users.findOne({where: {user}}).catch(
        (err)=> {
            return res.status(500).send({message: err});
        }
    )
    if(!isExist){
        return res.status(400).send({message: "user or password does not match"})

    }
    
    return res.send({message: "LOGIN"})
}