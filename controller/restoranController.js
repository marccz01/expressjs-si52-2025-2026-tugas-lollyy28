const Restoran = require('../models/restoranModel');

// semua restoran
exports.getAllRestoran = async (req, res) => {
  try {
    const restoran = await Restoran.find();
    res.json({ success: true, data: restoran });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// restoran by ID
exports.getRestoranById = async (req, res) => {
  try {
    const restoran = await Restoran.findById(req.params.id);
    if (!restoran) return res.status(404).json({ message: 'Restoran tidak ditemukan' });
    res.json({ success: true, data: restoran });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// tambah restoran baru
exports.createRestoran = async (req, res) => {
  try {
    const { nama, alamat, jenisMasakan, rating, hargaRataRata } = req.body;
    const restoran = await Restoran.create({ nama, alamat, jenisMasakan, rating, hargaRataRata });
    res.status(201).json({ success: true, message: 'Restoran berhasil ditambahkan', data: restoran });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// update restoran
exports.updateRestoran = async (req, res) => {
  try {
    const restoran = await Restoran.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restoran) return res.status(404).json({ message: 'Restoran tidak ditemukan' });
    res.json({ success: true, message: 'Restoran berhasil diperbarui', data: restoran });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// hapus restoran
exports.deleteRestoran = async (req, res) => {
  try {
    const restoran = await Restoran.findByIdAndDelete(req.params.id);
    if (!restoran) return res.status(404).json({ message: 'Restoran tidak ditemukan' });
    res.json({ success: true, message: 'Restoran berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};