const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  let { username, password } = req.body;
  username = username.toLowerCase();
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const newUser = new User({username,password});
  newUser.save((error, user) => {
    if (error) return res.json({Error:error});
    res.json({
      success: "New User Created",
      UserCreated: newUser,
    })
  })
};

module.exports = {
  createUser
};
