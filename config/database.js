const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myapi', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Berhasil Terhubung Ke MongoDB!');
  } catch (error) {
    console.error('Gagal Koneksi Ke MongoDB :', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
