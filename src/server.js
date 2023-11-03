const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use(bodyParser.json());


  
  mongoose.connect('mongodb://127.0.0.1:27017/signup', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


  const User = mongoose.model('User', {
   
    username: String,
   
    email: String,
    password: String,
    
    firstName: String,
    lastName: String,
  });
 
 
    
  app.post('/signup', async (req, res) => {
    const {
      
      username,
     
      email,
      password,
      
      firstName,
      lastName,
    } = req.body;

    try {


      if (!username || !email || !password ||  !firstName || !lastName) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }

      const newUser = new User({
       
        username,
        email,
        password,
        
        firstName,
        lastName,
      });

    
      await newUser.save();

      
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  app.post('/coachlog', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user ) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h',
      });
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  



  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
