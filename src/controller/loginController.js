const jwt = require('jsonwebtoken');
const Users = require('../database').Users;
const bcrypt = require('bcrypt')
exports.loginController = async (req, res) => {
    const { user, password } = req.body;
    const isExist = await Users.findOne({ where: { user } }).catch(
        (err) => {
            return res.status(500).send({ message: err });
        }
    )
    if (!isExist) {
        return res.status(400).send({ message: "user or password does not match" })

    }
    if (!bcrypt.compareSync(password, isExist.password)) {
        return res
            .status(400)
            .json({ message: "Email or password does not match!" });
    }
    const jwtToken = jwt.sign(
        { id: isExist.id, email: isExist.email },
        process.env.JWT_SECRET
      );
      return res.json({ message: "Welcome Back!", token: jwtToken });
}