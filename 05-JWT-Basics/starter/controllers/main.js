// check username. password in post request
// if exist create new JWT
// send back to front-end
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  // mongooose validation
  // Joi
  // check in the controller
  if (!username || !password) {
    throw new BadRequestError("Please provide username or password");
  }
  // this id just temporary id
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });

  //   console.log(username, password);
  //   res.send("Fake Login/Register/Signup");
};

const dashboard = async (req, res) => {
  const luckyNymber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNymber}`,
  });
};

module.exports = { login, dashboard };
