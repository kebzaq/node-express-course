const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ msg: "Name or password is empty" });
  }

  const id = Math.floor(Math.random() * 100);

  const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });
  res.status(200).json({ msg: `User created`, token });
};

const hello = async (req, res) => {
  console.log(req.user);
  res.status(200).json({
    msg: `Hello, ${req.user.name}`,
    secret: `Congrats! You joined the JWT secret society!`,
  });
};

module.exports = { logon, hello };
