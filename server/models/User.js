const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    role: {
      type: String,
      enum: ['parent', 'kid', 'organization'],
      required: [true, 'Role is required']
    },
    childProfile: {
      name: { type: String, default: '' },
      age: { type: Number, min: 1, max: 18, default: null }
    },
    organizationProfile: {
      orgName: { type: String, default: '' },
      orgAddress: { type: String, default: '' }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
