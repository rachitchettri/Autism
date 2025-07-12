const Kid = require('../models/Kid');

// Create kid
exports.createKid = async (req, res) => {
  try {
    const { name } = req.body;
    const parentId = req.user._id;

    const newKid = await Kid.create({ name, parentId });
    res.status(201).json({ message: 'Kid created successfully', kid: newKid });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create kid', error: err.message });
  }
};

// Get all kids for logged-in parent/organization
exports.getKids = async (req, res) => {
  try {
    const kids = await Kid.find({ parentId: req.user._id });
    res.status(200).json(kids);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch kids', error: err.message });
  }
};

// Update kid (name or scores)
exports.updateKid = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Kid.findOneAndUpdate(
      { _id: id, parentId: req.user._id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Kid not found' });
    res.status(200).json({ message: 'Kid updated', kid: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update kid', error: err.message });
  }
};

// Delete kid
exports.deleteKid = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Kid.findOneAndDelete({ _id: id, parentId: req.user._id });
    if (!deleted) return res.status(404).json({ message: 'Kid not found' });
    res.status(200).json({ message: 'Kid deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete kid', error: err.message });
  }
};
