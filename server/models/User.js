const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ['parent', 'organization'], required: true },

  // Organization only
  org_name: { type: String },

  // Parent only
  f_name: { type: String },
  l_name: { type: String },
  age: { type: Number },
  gender: { type: String, enum: ['male', 'female', 'other'] },

  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // kidId, organizationId fields removed for now, to be used later
});



// Password hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
