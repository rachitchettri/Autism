// const Kid = require('../models/Kid');

// // Create kid
// exports.createKid = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const parentId = req.user._id;

//     const newKid = await Kid.create({ name, parentId });
//     res.status(201).json({ message: 'Kid created successfully', kid: newKid });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to create kid', error: err.message });
//   }
// };

// // Get all kids for logged-in parent/organization
// exports.getKids = async (req, res) => {
//   try {
//     const kids = await Kid.find({ parentId: req.user._id });
//     res.status(200).json(kids);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch kids', error: err.message });
//   }
// };

// // Update kid (name or scores)
// exports.updateKid = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updated = await Kid.findOneAndUpdate(
//       { _id: id, parentId: req.user._id },
//       req.body,
//       { new: true }
//     );
//     if (!updated) return res.status(404).json({ message: 'Kid not found' });
//     res.status(200).json({ message: 'Kid updated', kid: updated });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to update kid', error: err.message });
//   }
// };

// // Delete kid
// exports.deleteKid = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Kid.findOneAndDelete({ _id: id, parentId: req.user._id });
//     if (!deleted) return res.status(404).json({ message: 'Kid not found' });
//     res.status(200).json({ message: 'Kid deleted' });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to delete kid', error: err.message });
//   }
// };



const Kid = require('../models/Kid');

// backend/controllers/kidController.js

exports.createKid = async (req, res) => {
  try {
    const { name, gameScores, parentId } = req.body;
    const currentUser = req.user;

    // Determine parentId: if user is parent, use their ID
    let finalParentId = currentUser.role === 'organization' ? parentId : currentUser._id;

    if (!finalParentId) {
      return res.status(400).json({ message: 'Parent ID is required.' });
    }

    const newKid = await Kid.create({
      name,
      parentId: finalParentId,
      gameScores,
    });

    res.status(201).json({ message: 'Kid created successfully', kid: newKid });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create kid', error: err.message });
  }
};


// Get all kids for logged-in parent/organization
exports.getKids = async (req, res) => {
  try {
    let kids;
    if (req.user.role === 'organization') {
      kids = await Kid.find({}).populate('parentId', 'f_name l_name');
    } else {
      kids = await Kid.find({ parentId: req.user._id }).populate('parentId', 'f_name l_name');
    }
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

    let filter = { _id: id };
    if (req.user.role === 'parent') {
      // Parent can delete only their kid
      filter.parentId = req.user._id;
    } else if (req.user.role === 'organization') {
      // Organization can delete any kid, or you can restrict more here
      // For now, no filter on parentId for org
    } else {
      return res.status(403).json({ message: 'Access denied' });
    }

    const deleted = await Kid.findOneAndDelete(filter);
    if (!deleted) return res.status(404).json({ message: 'Kid not found or not authorized' });

    res.status(200).json({ message: 'Kid deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete kid', error: err.message });
  }
};

