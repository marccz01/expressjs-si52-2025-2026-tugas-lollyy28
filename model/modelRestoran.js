const mongoose = require('mongoose');

const restoranSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  jenisMasakan: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  hargaRataRata: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Restoran', restoranSchema);