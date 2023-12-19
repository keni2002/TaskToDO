const Users = require('../database').Users;
const bcrypt = require('bcrypt')

exports.registerController = async (req, res) => {
    const { user, password } = req.body;
    if(!user || !password ){
        return res.json({message: "something Empty"})
    }
    const isExists = await Users.findOne({ where: { user } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );
    if (isExists) {
        return res.status(409).json({ message: "User already exists!" });
    }
    //agregando el usuario
    //generating hard security hash
    const saltRounds = 11
    const newPass = bcrypt.hashSync(password, saltRounds);

    const newUser = new Users({ user, password: newPass });
    const savedUser = await newUser.save().catch((err) => {
        console.log('Error: ', err);
        return res.status(500).json({ error: "Cannot register user at the moment!" });
    });

    if (savedUser){
        return res.json({ message: "Thanks for registering" });
    } 
}