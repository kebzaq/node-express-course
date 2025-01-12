const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { id, name } = decoded;
    req.user = { id, name };
    next();
  } catch (err) {
    res.status(401).json({ msg: "Not authorized to access this resource" });
  }
};

module.exports = authMiddleware;
