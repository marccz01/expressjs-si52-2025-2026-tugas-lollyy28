const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'kunci123hbasd';

// untuk buat token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1d' });
};

// register
exports.register = async (req, res) => {
  
  console.log('Req Body : ' + req.body);

  try {

    const { name, email, password } = req.body;

    // cek email sudah ada
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Email Sudah Terdaftar' });

    const user = await User.create({ name, email, password });

    res.status(201).json({
      success: true,
      message: 'User Berhasil Mendaftar',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Email Atau Password Salah' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Password Salah' });

    res.json({
      success: true,
      message: 'Login Berhasil',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// profil
exports.profil = async (req, res) => {
  try {
    // req.user diambil dari middleware protect
    const user = req.user;

    if (!user) {
      return res.status(404).json({ success: false, message: 'User Tidak Ditemukan' });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};