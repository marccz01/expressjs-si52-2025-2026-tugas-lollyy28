const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const JWT_SECRET = 'kunci123hbasd';

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // ambil token dari header
      token = req.headers.authorization.split(' ')[1];
      // verifikasi token
      const decoded = jwt.verify(token, JWT_SECRET);
      // cari user berdasarkan id dari token
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token Tidak Valid' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Token Wajib Diisi' });
  }
};