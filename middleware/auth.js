// middleware/auth.js
module.exports = function (req, res, next) {
  const userKey = req.headers['x-api-key']; // key must be passed in headers
  const serverKey = req.app.get('API_KEY');

  if (!userKey || userKey !== serverKey) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }

  next();
};
