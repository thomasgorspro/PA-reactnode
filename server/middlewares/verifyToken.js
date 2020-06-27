const { verifyToken: JWTVerifyToken } = require("../lib/auth");

const verifyToken = (req, res, next) => {
  let authHeader = req.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.sendStatus(401);
    return;
  }
  authHeader = authHeader.replace("Bearer ", "");

  JWTVerifyToken(authHeader)
    .then((payload) => {
      req.user = payload;
      next();
    })
    .catch(() => res.sendStatus(401));
};

module.exports = verifyToken;