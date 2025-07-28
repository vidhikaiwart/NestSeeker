import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandle } from '../utills/error.js';

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({ username, email, password : hashPassword}); // ✅ Corrected

    await newUser.save();

    res.status(201).json('User created successfully!');
  } catch (err) {
    next(errorHandle(550,'error from the function'));
   
  }
};

export default signup;

