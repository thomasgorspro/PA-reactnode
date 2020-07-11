const basicAuth = (req, res, next) => {
  const auth = { clientToken: 'qsdazeaz', clientSecret: 'qsdqsd' };
  let authHeader = req.get("Authorization");

  authHeader = authHeader.replace("Basic ", "");
  const [clientToken, clientSecret] = Buffer.from(authHeader, 'base64').toString().split(':')
  if (clientToken && clientSecret && clientToken === auth.clientToken && clientSecret === auth.clientSecret) {
    return next();
  }

  res.status(401).send('Authentication required');
}

module.exports = basicAuth;