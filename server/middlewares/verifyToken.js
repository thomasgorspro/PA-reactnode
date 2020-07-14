const { verifyToken: JWTVerifyToken } = require("../lib/auth");
const Merchant = require("../models/sequelize/Merchant");

const verifyToken = (req, res, next) => {
  let authHeader = req.get("Authorization");
  if (
    !authHeader ||
    (!authHeader.startsWith("Bearer") && !authHeader.startsWith("Basic"))
  ) {
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
    // const auth = { clientToken: 'd0a1760eb0278', clientSecret: 'c4f4c34715063' };

    authHeader = authHeader.replace("Basic ", "");
    const [clientToken, clientSecret] = Buffer.from(authHeader, "base64")
      .toString()
      .split(":");

    Merchant.findOne({
      where: {
        clientToken: clientToken,
        clientSecret: clientSecret,
      },
    })
      .then((data) => {
        if (!data) {
          return Promise.reject("invalid");
        } else {
          return Promise.resolve(data);
        }
      })
      .then((user) => next())
      .catch((err) => {
        err === "invalid"
          ? res.sendStatus(400)
          : console.error(err) || res.sendStatus(500)
      }
      );
  }
};

module.exports = verifyToken;
