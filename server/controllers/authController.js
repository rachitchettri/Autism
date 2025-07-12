const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// const registerUser = async (req, res) => {
//   try {
//     const {
//       f_name,
//       l_name,
//       age,
//       gender,
//       role,
//       org_name,
//       email,
//       password,
//       confirmPassword,
//       kidId,          // no longer needed at registration
//       organizationId  // no longer needed at registration
//     } = req.body;

//     // Validate role only parent or organization
//     if (!role || !['parent', 'organization'].includes(role)) {
//       return res.status(400).json({ message: 'Role must be either parent or organization.' });
//     }

//     // Common required fields
//     if (!email || !password || !confirmPassword) {
//       return res.status(400).json({ message: 'Email, password and confirm password are required.' });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match.' });
//     }

//     // Validate fields depending on role
//     if (role === 'organization') {
//       if (!org_name) {
//         return res.status(400).json({ message: 'Organization name is required.' });
//       }
//     } else if (role === 'parent') {
//       if (!f_name || !l_name || !gender) {
//         return res.status(400).json({ message: 'First name, last name, and gender are required for parent.' });
//       }
//     }

//     // Check if email already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists with this email.' });
//     }

//     // Prepare new user data
//     const newUserData = {
//       role,
//       email,
//       password,
//     };

//     if (role === 'organization') {
//       newUserData.org_name = org_name;
//     } else if (role === 'parent') {
//       newUserData.f_name = f_name;
//       newUserData.l_name = l_name;
//       newUserData.age = age;
//       newUserData.gender = gender;
//     }

//     const newUser = new User(newUserData);
//     await newUser.save();

//     res.status(201).json({
//       message: 'User registered successfully.',
//       user: {
//         id: newUser._id,
//         role: newUser.role,
//         email: newUser.email,
//         ...(role === 'organization' ? { org_name: newUser.org_name } : {
//           f_name: newUser.f_name,
//           l_name: newUser.l_name
//         })
//       }
//     });
//   } catch (error) {
//     console.error('Registration Error:', error);
//     res.status(500).json({ message: 'Server error during registration.' });
//   }
// };


const updateBasicInfo = async (req, res) => {
  try {
    const { f_name, l_name, org_name, age, gender } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Update fields based on role
    if (req.user.role === 'organization') {
      if (!org_name) {
        return res.status(400).json({ message: 'Organization name is required.' });
      }
      req.user.org_name = org_name;
    } else if (req.user.role === 'parent') {
      if (!f_name || !l_name) {
        return res.status(400).json({ message: 'First name and last name are required.' });
      }
      req.user.f_name = f_name;
      req.user.l_name = l_name;
      if (age !== undefined) req.user.age = age;
      if (gender !== undefined) req.user.gender = gender;
    } else {
      return res.status(400).json({ message: 'Invalid user role.' });
    }

    await req.user.save();

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: req.user._id,
        role: req.user.role,
        email: req.user.email,
        ...(req.user.role === 'organization'
          ? { org_name: req.user.org_name }
          : {
              f_name: req.user.f_name,
              l_name: req.user.l_name,
              age: req.user.age,
              gender: req.user.gender,
            }),
      },
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Server error while updating profile.' });
  }
};




const registerUser = async (req, res) => {
  try {
    const {
      f_name,
      l_name,
      age,
      gender,
      role,
      org_name,
      email,
      password,
      confirmPassword
    } = req.body;

    // Validate role
    if (!role || !['parent', 'organization'].includes(role)) {
      return res.status(400).json({ message: 'Role must be either parent or organization.' });
    }

    // Minimal validation for registration
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'Email, password and confirm password are required.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    // Check for existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Construct user
    const newUser = new User({
      role,
      email,
      password,
      ...(role === 'organization' && org_name ? { org_name } : {}),
      ...(role === 'parent' && f_name && l_name && gender ? { f_name, l_name, gender, age } : {})
    });

    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully.',
      user: {
        id: newUser._id,
        role: newUser.role,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check email & password are provided
    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required.' });

    // Find user
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'Invalid credentials.' });

    // Compare password
    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid credentials.' });

    // Success
    res.status(200).json({
      message: 'Login successful',
      token: generateToken(user._id),
      user: {
        id: user._id,
        f_name: user.f_name,
        l_name: user.l_name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
};

const updatePreferences = async (req, res) => {
  try {
    const userId = req.user._id;
    const { preferences } = req.body;

    if (!Array.isArray(preferences)) {
      return res.status(400).json({ message: 'Preferences must be an array.' });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { preferences },
      { new: true }
    );

    res.json({ message: 'Preferences updated', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { registerUser, loginUser,updateBasicInfo,updatePreferences };

