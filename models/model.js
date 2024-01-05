const mongoose = require('mongoose');
const { DB_url } = require('../config.js')

// Connect to MongoDB
mongoose.connect(DB_url);


// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  email: {
    type: String,
    require: true,
    unique: true
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true
  },
  courseId: {
    type: [Number],
    default: []
  }
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  email: {
    type: String,
    require: true,
    unique: true
  },
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  courseId: {
    type: [Number],
    default: []
  }
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  img: {
    type: String,
    require: true
  },
  courseId: {
    type: String,
    required: true,
    unique: true,
    primarykey: true
  }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
  Course
}
