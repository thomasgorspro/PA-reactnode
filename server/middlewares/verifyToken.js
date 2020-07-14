const { verifyToken: JWTVerifyToken } = require("../lib/auth");

const verifyToken = (req, res, next) => {
  let authHeader = req.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer") && !authHeader.startsWith("Basic")) {
    res.sendStatus(401);
    return;
  }

  if (authHeader.startsWith("Bearer")) {
    authHeader = authHeader.replace("Bearer ", "");
  
    JWTVerifyToken(authHeader)
      .then((payload) => {
        req.user = payload;
        next();
      })
      .catch(() => res.sendStatus(401));
  } else {

    const auth = { clientToken: 'qsdazeaz', clientSecret: 'qsdqsd' };
  
    authHeader = authHeader.replace("Basic ", "");
    const [clientToken, clientSecret] = Buffer.from(authHeader, 'base64').toString().split(':')
    if (clientToken && clientSecret && clientToken === auth.clientToken && clientSecret === auth.clientSecret) {
      next();
    } else {
      res.sendStatus(401);
    }
  }
};

module.exports = verifyToken;