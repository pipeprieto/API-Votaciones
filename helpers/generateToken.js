const jwt = require("jsonwebtoken");

const tokenSign = async (user) => {
  return jwt.sign(
    {
      _username: user.user,
      _id: user.id,
    },
    process.env.JWT_MASTERKEY,
    {
      expiresIn: "1h",
    }
  );
};

module.exports = {
  tokenSign,
};