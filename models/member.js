const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  title: String,
  bio: String,
  github: String
});

module.exports = mongoose.model('teamMember', teamMemberSchema);